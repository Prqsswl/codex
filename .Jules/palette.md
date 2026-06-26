
## 2024-06-26 - Accessible Countdown Redirects
**Learning:** When implementing countdown redirects, relying solely on visual text updates (e.g., "Redirecting in 3s...") can leave screen reader users unaware of the impending redirect. Using `aria-live="polite"` with proper pluralization (e.g., "3 seconds", "1 second") ensures an inclusive experience without unnecessary disruption.
**Action:** For all future dynamic redirect countdowns, ensure an `aria-live` announcer is explicitly added, visually hidden, and synced properly with the visual countdown state immediately on initialization.
