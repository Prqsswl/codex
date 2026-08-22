## 2024-05-13 - Dynamic Countdown Pluralization and A11y
**Learning:** Hardcoded initial text in static HTML must match dynamic JavaScript output (e.g., using unabbreviated words like "seconds") to prevent mismatch and ensure accurate initial screen reader announcements. Proper pluralization ("1 second" vs "3 seconds") adds essential polish.
**Action:** Always ensure dynamic countdowns use proper grammar pluralization and that the initial static HTML matches the first state of the JavaScript output. Add `aria-live="polite"` to dynamically updating announcements.
