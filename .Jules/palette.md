## 2024-05-15 - Accessible Dynamic Countdowns
**Learning:** For dynamic frontend page redirects with visible countdowns, screen readers won't read the updated text if the countdown element doesn't have ARIA live regions set up. Adding a visually-hidden aria-live="polite" region for screen readers ensures the countdown is announced continuously.
**Action:** Always add an aria-live region (like `<div aria-live="polite" class="sr-only">`) to announce dynamic text updates on pages like countdowns or asynchronous tasks, and update its text content simultaneously with the visual text updates.
