export interface Video {
    id: string;
    title: string;
    categoryPath: string[]; // e.g., ["Sports", "Football", "Messi"]
    tags: string[];
    qualityScore: number; // 0-100, for the "Discovery" algorithm
    viewCount: number; // for the "Popularity" algorithm
}

export interface RecommendationResult {
    algorithmName: string;
    recommendations: Video[];
}
