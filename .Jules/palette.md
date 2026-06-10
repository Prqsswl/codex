## 2024-06-10 - Accessible Redirect Countdowns
**Learning:** Automatically redirecting pages with countdowns often trap screen reader users if the countdown state is not explicitly broadcasted via `aria-live`, leading to sudden, unexplained redirects.
**Action:** When implementing or updating countdowns, always initialize and bind an `aria-live='polite'` visually hidden element to update in sync with the visual countdown text, avoiding screen reader interruptions (`assertive`) for every second tick.
