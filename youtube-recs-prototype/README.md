# YouTube Recommendation Engine Prototype

This is a Proof of Concept (PoC) for a "Custom YouTube" recommendation engine, based on the principles of Discovery, Structured Diversity, and Meta-Layer Analysis.

## Overview

The prototype demonstrates the difference between:
1.  **Standard Algorithm (Retention-based):** Optimizes for similarity and popularity (The "Rabbit Hole").
2.  **Better Algorithm (Discovery-based):** Optimizes for a structured mix of familiar, broad, new, and high-quality "hidden gem" content.

## How to Run

1.  Navigate to this directory:
    ```bash
    cd youtube-recs-prototype
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Build the project:
    ```bash
    npm run build
    ```
    (Or `npx tsc`)

4.  Run the simulation:
    ```bash
    npm start
    ```

## Logic Explained

The "Better Algorithm" follows this distribution:
*   **20% Same Topic:** Direct relevance to what you are watching.
*   **30% Broader Category:** Related fields (e.g., if watching Messi -> show other Sports).
*   **20% New Category:** Completely different high-quality content to break the bubble.
*   **20% Hidden Gems:** High-quality videos with low view counts (Discovery).
*   **10% Meta/Thinking:** Content that encourages deep thought.

## Data

The data is mocked in `src/mockDataGenerator.ts` and covers categories like Sports, Music, Science, History, and Meta.
