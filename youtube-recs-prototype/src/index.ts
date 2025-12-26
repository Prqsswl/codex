import * as readline from 'readline';
import { generateVideos } from './mockDataGenerator';
import { standardYouTubeAlgorithm, betterDiscoveryAlgorithm } from './algorithms';
import { Video } from './types';

const videos = generateVideos();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayVideo(v: Video) {
    return `[${v.categoryPath.join(' > ')}] ${v.title} (Views: ${v.viewCount}, Quality: ${v.qualityScore})`;
}

function runSimulation() {
    console.log("\n=== Custom YouTube Recommendation Engine Prototype ===\n");
    console.log("Available starting videos (one from each category):");

    // Pick one representative from each leaf category
    const seenPaths = new Set<string>();
    const starters: Video[] = [];
    videos.forEach(v => {
        const pathStr = v.categoryPath.join('/');
        if (!seenPaths.has(pathStr)) {
            seenPaths.add(pathStr);
            starters.push(v);
        }
    });

    starters.forEach((v, idx) => {
        console.log(`${idx + 1}. ${displayVideo(v)}`);
    });

    rl.question('\nSelect a video number to "watch": ', (answer: string) => {
        const idx = parseInt(answer) - 1;
        if (isNaN(idx) || idx < 0 || idx >= starters.length) {
            console.log("Invalid selection.");
            rl.close();
            return;
        }

        const currentVideo = starters[idx];
        // Ensure currentVideo is defined (TypeScript check)
        if (!currentVideo) {
            console.log("Error: Video not found.");
            rl.close();
            return;
        }

        console.log(`\n\nNOW WATCHING: ${currentVideo.title}`);
        console.log("==================================================");

        const standardRecs = standardYouTubeAlgorithm(currentVideo, videos);
        const customRecs = betterDiscoveryAlgorithm(currentVideo, videos);

        console.log("\n--- STANDARD ALGORITHM (Retention & Sameness) ---");
        standardRecs.forEach((v, i) => console.log(`${i+1}. ${displayVideo(v)}`));

        console.log("\n--- BETTER ALGORITHM (Discovery & Structured Diversity) ---");
        customRecs.forEach((v, i) => {
            let label = "";
            if (JSON.stringify(v.categoryPath) === JSON.stringify(currentVideo.categoryPath)) label = "[SAME]";
            else if (v.categoryPath[0] === currentVideo.categoryPath[0]) label = "[BROAD]";
            else if (v.qualityScore > 90 && v.viewCount < 10000) label = "[GEM]";
            else label = "[NEW]";

            console.log(`${i+1}. ${label.padEnd(8)} ${displayVideo(v)}`);
        });

        rl.close();
    });
}

runSimulation();
