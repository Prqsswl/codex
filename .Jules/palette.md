## 2025-03-09 - Added Screen Reader Announcements for Async Redirect State
**Learning:** Screen readers often miss dynamic layout changes when toggling `display: none` or injecting simple text updates asynchronously.
**Action:** Always include a visually hidden ARIA live region (`aria-live="polite" aria-atomic="true"`) to proactively announce completion states and redirect countdowns to ensure full accessibility.
