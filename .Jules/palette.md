## 2025-06-01 - Add Screen Reader Announcer for Dynamic Redirect Countdown
**Learning:** Redirect countdowns on static success pages (like the login success page) update visually but fail to announce to screen readers. This leaves visually impaired users unaware of the impending automatic redirect.
**Action:** Always add an `aria-live="polite"` and `aria-atomic="true"` announcer region for countdown timers. Visually hide it using inline styles (since we can't add custom CSS classes per constraints) and update its text content simultaneously with the visual countdown.
