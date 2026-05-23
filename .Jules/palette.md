## 2025-03-08 - Added aria-live announcement to automatic redirect
**Learning:** For dynamic countdowns in static pages, setting text directly in a button may not be read by screen readers due to lacking `aria-live`. Screen readers won't announce updates unless wrapped in a polite live region.
**Action:** Created a visually hidden `div` with `aria-live="polite"` and `aria-atomic="true"` to dynamically announce countdown text explicitly. Ensured inline styling is used since custom CSS classes are restricted.
