## 2024-06-27 - Accessible Countdown Redirection
**Learning:** When creating a dynamic redirect countdown, using `aria-live="polite"` on a visually hidden (`.sr-only` equivalent) element is necessary so screen readers announce the changing state (e.g. "Redirecting in 3 seconds..."). Pluralizing the grammar (e.g., "1 second" vs "3 seconds") also makes the announcement more professional.
**Action:** Always add an `aria-live` announcer to update screen reader users of time-sensitive visual countdowns, and format time units correctly based on the value.
