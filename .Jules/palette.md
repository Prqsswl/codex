## 2024-06-25 - Improved Redirect Countdown Accessibility
**Learning:** When creating automatic dynamic redirect countdowns, setting visual text to shorthand (e.g. '3s') is fine, but it needs an accompanying visually hidden aria-live region to properly read out grammatical text (e.g., '3 seconds'). Also, `aria-live="polite"` should be used over `assertive` to avoid interrupting the screen reader while ticking.
**Action:** Always include a `.sr-only` equivalent dynamic announcer alongside concise visual countdowns.
