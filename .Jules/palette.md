## 2024-10-21 - Added aria-live to redirect countdown and made div semantic
**Learning:** Found an accessibility issue pattern where a non-semantic div with a changing countdown text was used for a redirect. Screen readers would not announce the countdown, and keyboard users could not focus the div.
**Action:** Always use semantic elements (like `<a>` for links) and ensure dynamic countdowns have `aria-live="polite"` and `aria-atomic="true"` so assistive technologies announce the text changes. Additionally, provide a visible `:focus-visible` outline for keyboard navigation.
