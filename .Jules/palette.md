## 2026-03-29 - Dynamic state ARIA live regions
**Learning:** Dynamically shown dialogs and automatic redirect countdowns require `aria-live` ('polite' or 'assertive') and `aria-atomic='true'` to ensure screen readers properly announce state changes without requiring manual focus.
**Action:** Always add `aria-live` and `aria-atomic` to dynamically visible components like setup or redirect dialogs in HTML.
