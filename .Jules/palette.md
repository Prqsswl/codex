## 2024-09-06 - Semantic HTML and ARIA labels for sign-in page
**Learning:** The success.html sign-in page lacked structural semantics (using `div` for titles instead of `h1`/`h2`) and the decorative/informative logo lacked an `aria-label` and `role="img"`. This makes it harder for screen readers to navigate and understand the page context.
**Action:** Always verify that main page titles use appropriate heading tags (`h1`, `h2`, etc.) instead of generic `div`s, and ensure SVGs have a `role="img"` and `aria-label` when they convey meaning (like a logo).
