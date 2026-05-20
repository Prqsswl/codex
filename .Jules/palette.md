## 2026-05-20 - Add ARIA live region for redirect countdown

**Learning:** Dynamically updating text on screen (like a redirect countdown) is not announced by screen readers unless placed in an `aria-live` region. Adding a visually hidden `aria-live` element ensures visually impaired users are aware of the impending automatic redirect without changing the visual layout.
**Action:** When implementing countdowns or automatic redirects, always include a permanently present, visually hidden `aria-live` region (e.g., using polite announcement) and keep its text synchronized with the visual countdown.
