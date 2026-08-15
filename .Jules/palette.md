## 2026-08-15 - Dynamic text pluralization
**Learning:** Hardcoded initial states and dynamic updates in countdowns need pluralization to avoid grammar issues (e.g., '1 seconds'). Both initial HTML states and JS string generation must stay in sync to ensure accurate screen reader announcements from start to finish.
**Action:** Always check both the initial state and the dynamic string generation to properly handle pluralization (e.g., `1 second` vs `2 seconds`).
