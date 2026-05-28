## 2024-05-28 - ARIA Live Announcer for Dynamic Countdown
**Learning:** Dynamic redirect countdowns present accessibility challenges because the visible countdown text often updates rapidly. By syncing this text to a visually hidden `aria-live="polite"` element, we provide reliable screen reader announcements without artificial delays.
**Action:** Always include a dedicated, visually hidden `aria-live` region initialized synchronously with visible countdowns to ensure robust accessibility.
