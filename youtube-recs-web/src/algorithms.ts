import type { Video } from './types';

// Helper: Shuffle array
function shuffle<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
}

export function standardYouTubeAlgorithm(currentVideo: Video, allVideos: Video[]): Video[] {
    // Filter out the current video
    let candidates = allVideos.filter(v => v.id !== currentVideo.id);

    // Score candidates based on:
    // 1. Same exact category path (High weight)
    // 2. Tag overlap
    // 3. View count (High weight - popularity bias)

    candidates.sort((a, b) => {
        let scoreA = 0;
        let scoreB = 0;

        // Category Match
        if (JSON.stringify(a.categoryPath) === JSON.stringify(currentVideo.categoryPath)) scoreA += 100;
        if (JSON.stringify(b.categoryPath) === JSON.stringify(currentVideo.categoryPath)) scoreB += 100;

        // View Count (Normalized loosely)
        scoreA += Math.log10(a.viewCount) * 10;
        scoreB += Math.log10(b.viewCount) * 10;

        return scoreB - scoreA;
    });

    return candidates.slice(0, 10);
}

export function betterDiscoveryAlgorithm(currentVideo: Video, allVideos: Video[]): Video[] {
    const recommendations: Video[] = [];
    const seenIds = new Set<string>();
    seenIds.add(currentVideo.id);

    const candidates = allVideos.filter(v => v.id !== currentVideo.id);

    // 1. Same Specific Topic (20% -> 2 videos)
    // Same category path, sorted by relevance/views
    const sameTopic = candidates.filter(v =>
        JSON.stringify(v.categoryPath) === JSON.stringify(currentVideo.categoryPath)
    ).sort((a, b) => b.viewCount - a.viewCount);

    for (const v of sameTopic) {
        if (recommendations.length < 2 && !seenIds.has(v.id)) {
            recommendations.push(v);
            seenIds.add(v.id);
        }
    }

    // 2. Broader Category (30% -> 3 videos)
    // Same parent category (e.g. "Sports"), but different sub-category (e.g. "Ronaldo" instead of "Messi")
    const broaderCategory = candidates.filter(v =>
        v.categoryPath[0] === currentVideo.categoryPath[0] &&
        JSON.stringify(v.categoryPath) !== JSON.stringify(currentVideo.categoryPath)
    );
    shuffle(broaderCategory); // Randomize to avoid just the most popular

    for (const v of broaderCategory) {
        if (recommendations.length < 5 && !seenIds.has(v.id)) {
            recommendations.push(v);
            seenIds.add(v.id);
        }
    }

    // 3. New / Adjacent Category (20% -> 2 videos)
    // Completely different top-level category
    const newCategory = candidates.filter(v =>
        v.categoryPath[0] !== currentVideo.categoryPath[0]
    );
    shuffle(newCategory);

    for (const v of newCategory) {
        if (recommendations.length < 7 && !seenIds.has(v.id)) {
            recommendations.push(v);
            seenIds.add(v.id);
        }
    }

    // 4. Surprise / Hidden Gems (20% -> 2 videos)
    // High quality score, low views (Discovery)
    const hiddenGems = candidates.filter(v => v.qualityScore > 90 && v.viewCount < 10000);
    shuffle(hiddenGems);

    for (const v of hiddenGems) {
        if (recommendations.length < 9 && !seenIds.has(v.id)) {
            recommendations.push(v);
            seenIds.add(v.id);
        }
    }

    // Fill remaining spot with a "Meta/Thinking" video if available and not yet added
    // Or just fill with anything else if we are short
    if (recommendations.length < 10) {
        const metaVideos = candidates.filter(v => v.categoryPath[0] === "Meta");
        shuffle(metaVideos);
        for (const v of metaVideos) {
            if (recommendations.length < 10 && !seenIds.has(v.id)) {
                recommendations.push(v);
                seenIds.add(v.id);
            }
        }
    }

    // Final fallback
    const remaining = candidates.filter(v => !seenIds.has(v.id));
    shuffle(remaining);
    while (recommendations.length < 10 && remaining.length > 0) {
        recommendations.push(remaining.pop()!);
    }

    return recommendations;
}
