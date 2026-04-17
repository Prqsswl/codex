## 2024-04-17 - [Accessible Redirect Countdown]
**Learning:** Dynamically updated countdown text (e.g., "Redirecting in 3s...") needs a dedicated, visually hidden `aria-live="polite"` and `aria-atomic="true"` announcer element. Additionally, setting the initial timeout loop state should reflect the default HTML text before triggering the timeout to prevent an artificial delay in the countdown logic.
**Action:** Use a `.sr-only` class for the announcer and initialize `setTimeout` correctly to avoid delaying the first tick.
