## 2024-05-24 - Accessible Redirect Countdowns
**Learning:** Redirect countdowns on static pages often lack screen-reader visibility because the text updating visually is not properly announced. Relying solely on a visual text change causes screen reader users to miss the timer entirely.
**Action:** Always add an `aria-live="polite"` visually hidden announcer region that updates simultaneously with the visual countdown, and ensure it is present in the DOM permanently rather than toggled.
