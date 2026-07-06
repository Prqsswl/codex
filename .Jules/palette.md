## 2024-07-06 - Redirect Countdown Accessibility
**Learning:** Redirect countdowns on static login pages often lack screen reader announcements, leaving visually impaired users unaware of an impending automatic redirect.
**Action:** When creating or modifying a dynamic redirect countdown, implement a visually hidden `aria-live="polite"` region. Ensure the countdown state is correctly initialized and update the ARIA live text content simultaneously with the visual text to avoid artificial delays or missing the initial screen reader announcement.
