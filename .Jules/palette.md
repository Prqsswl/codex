
## 2024-06-15 - Accessible Redirect Countdowns
**Learning:** Dynamic countdowns like "Redirecting in 3s..." are often missed by screen readers because their container starts as `display: none` or lacks ARIA live properties.
**Action:** Always use a dedicated, permanently present, visually hidden DOM element with `aria-live="polite"` and `aria-atomic="true"` to announce time-sensitive state changes (like countdowns) to screen reader users without visual interruption.
