## 2024-05-27 - Accessible Redirect Countdowns
**Learning:** Dynamic text changes like redirect countdowns or newly revealed instructions are not automatically announced by screen readers if they are just toggled with `display: block` or updated via `textContent`.
**Action:** Use a permanently present, visually hidden DOM element (e.g., using `clip: rect(...)` inline styles) with `aria-live="polite" aria-atomic="true"`. Update its `textContent` simultaneously with visual updates so screen readers reliably announce the new state.
