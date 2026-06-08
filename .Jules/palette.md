## 2024-06-08 - Accessible Dynamic Redirect Countdowns
**Learning:** Dynamically updated text (like a countdown before a redirect) often misses screen readers if not announced via an `aria-live` region, leading to an unexpected redirect for visually impaired users.
**Action:** Always include a visually hidden `aria-live="polite"` element for dynamic countdowns and update its text content simultaneously with the visual countdown text.
