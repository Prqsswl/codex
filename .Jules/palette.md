## 2024-07-24 - Accessible Countdown Timers
**Learning:** When using JavaScript to implement a visual countdown (e.g., 'Redirecting in 3s...'), screen readers may announce text updates incorrectly or miss them entirely if `aria-live` is not configured, or if abbreviations like 's' are used.
**Action:** Implement a dedicated, visually hidden (`.sr-only`) DOM element with `aria-live="polite"` and `aria-atomic="true"` to serve as an announcer, and dynamically populate it with fully spelled-out text (e.g., '3 seconds'). Always ensure correct pluralization grammar in the announcement.
