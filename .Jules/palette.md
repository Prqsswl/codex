## 2023-10-27 - [Improve Countdown UX/A11y]
**Learning:** Screen readers and users benefit from fully spelled out time units and pluralization (e.g., '1 second' instead of '1s' or '1 seconds') during dynamic countdowns. Adding `aria-live="polite"` to the container ensures screen readers announce the countdown updates correctly.
**Action:** When implementing countdowns, spell out time units, handle pluralization properly, and ensure dynamic text updates are announced using `aria-live`.
