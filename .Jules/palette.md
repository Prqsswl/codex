## 2026-06-05 - Add ARIA live region for dynamic redirect countdown
**Learning:** For visually updated countdown texts during redirects, screen readers require an `aria-live` region to announce updates.
**Action:** Always include a visually hidden element with `aria-live="polite"` and update its text content simultaneously with visual countdowns.
