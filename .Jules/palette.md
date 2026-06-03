## 2024-06-03 - Accessible dynamic redirect countdowns
**Learning:** When dealing with rapidly updating UI text such as countdowns, standard text element updates are often missed by screen readers or spoken with artificial delays if not correctly structured.
**Action:** Added a dedicated, visually hidden ARIA live region (`aria-live="polite"` and `aria-atomic="true"`) to mirror the visible countdown text state, ensuring the screen reader seamlessly announces the "Redirecting in Xs..." status.
