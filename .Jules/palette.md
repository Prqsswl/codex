## 2024-08-10 - Add aria-live region to redirect countdown
**Learning:** Screen reader users miss dynamically updated text like redirect countdowns unless they are contained within an explicit `aria-live` region. Appending text like "in 3s..." may also not be announced gracefully.
**Action:** Always use a dedicated `.sr-only` element with `aria-live="polite"` and `aria-atomic="true"` for dynamic redirect updates. Use proper grammar (e.g. "seconds" vs "second") and hide the visual-only countdown text using `aria-hidden="true"`.
