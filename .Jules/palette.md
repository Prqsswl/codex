## 2025-06-16 - Add ARIA live announcer for auto-redirect countdown
**Learning:** For dynamic redirect countdowns in static HTML pages (e.g. login success redirect), it is essential to provide screen reader users with updates without interrupting them with assertive announcements.
**Action:** Always include an visually hidden `aria-live="polite"` element and update its text content concurrently with visual changes for auto-redirecting pages.
