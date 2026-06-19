## 2024-06-19 - Accessible and Grammatically Correct Countdown Timers
**Learning:** Screen readers need an `aria-live` element to announce redirect countdown timers dynamically, but setting it on the visual text often results in poor announcements. Also, dynamic text needs grammar rules for singular/plural (e.g. 1 second vs 3 seconds).
**Action:** Use an invisible ARIA live region with `aria-live="polite"` and update it simultaneously with the visual countdown, and always implement proper pluralization for countdown text.
