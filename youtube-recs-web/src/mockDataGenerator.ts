import type { Video } from './types';

const categories = [
    { path: ["Sports", "Football", "Messi"], tags: ["goal", "dribble", "barcelona", "argentina"] },
    { path: ["Sports", "Football", "Ronaldo"], tags: ["goal", "real madrid", "portugal", "siuu"] },
    { path: ["Sports", "Basketball", "LeBron"], tags: ["dunk", "lakers", "nba", "king"] },
    { path: ["Music", "Pop", "Ariana Grande"], tags: ["concert", "live", "pop", "vocal"] },
    { path: ["Music", "Rock", "Queen"], tags: ["bohemian rhapsody", "freddie mercury", "live aid"] },
    { path: ["Science", "Physics", "Quantum"], tags: ["entanglement", "schrodinger", "atoms"] },
    { path: ["Science", "AI", "LLMs"], tags: ["gpt", "transformer", "neural network", "hinton"] },
    { path: ["History", "Ancient", "Rome"], tags: ["caesar", "empire", "legion", "colosseum"] },
    { path: ["Documentaries", "Crime", "Heist"], tags: ["bank", "robbery", "fbi", "money"] },
    { path: ["Meta", "Thinking", "Game Theory"], tags: ["nash", "strategy", "prisoner dilemma"] }
];

export function generateVideos(): Video[] {
    const videos: Video[] = [];
    let idCounter = 1;

    categories.forEach(cat => {
        // Generate 10 "high view" videos (Mainstream)
        for (let i = 0; i < 10; i++) {
            videos.push({
                id: `v${idCounter++}`,
                title: `${cat.path[2]} Highlights #${i + 1} - ${cat.tags[0]}`,
                categoryPath: cat.path,
                tags: cat.tags,
                qualityScore: Math.floor(Math.random() * 50) + 40, // Average quality
                viewCount: Math.floor(Math.random() * 1000000) + 500000
            });
        }

        // Generate 3 "hidden gems" (High quality, low views)
        for (let i = 0; i < 3; i++) {
            videos.push({
                id: `v${idCounter++}`,
                title: `Deep Analysis: The Truth About ${cat.path[2]}`,
                categoryPath: cat.path,
                tags: [...cat.tags, "analysis", "essay"],
                qualityScore: 95, // High quality
                viewCount: Math.floor(Math.random() * 5000) + 100 // Low views
            });
        }
    });

    return videos;
}
