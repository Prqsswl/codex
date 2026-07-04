## 2026-07-04 - Accessible Redirect Countdowns
**Learning:** Redirect countdowns need both visual updates and screen reader announcements. Using a visually hidden `aria-live="polite"` element allows us to announce the countdown without disrupting the user, and spelling out the time unit ("second" vs "seconds") ensures proper grammar for screen readers compared to just "s".
**Action:** Always pair visual countdowns with an `aria-live` announcer, use proper pluralization for the announced text, and correctly initialize the state before the `setTimeout` loop.
