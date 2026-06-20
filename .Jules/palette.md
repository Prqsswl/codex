## 2024-05-24 - Accessible Redirect Countdowns
**Learning:** Dynamic text changes, like a countdown timer, are visually apparent but missed by screen readers unless specifically marked. A dedicated aria-live="polite" aria-atomic="true" visually hidden element ensures these important updates are announced gracefully.
**Action:** When implementing any time-based redirect or countdown UI, always pair the visual countdown with an aria-live announcer element that updates simultaneously. Pluralize strings correctly (e.g., "1 second" vs "3 seconds") for professional polish.
