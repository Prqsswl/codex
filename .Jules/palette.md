## 2025-06-17 - Add ARIA Announcer to Automatic Redirect Countdown
**Learning:** Automatic dynamic countdown redirects without `aria-live` cause screen readers to miss the ongoing time status, creating a jarring experience. Adding an `aria-live="polite"` element mapped to countdown state keeps it fully accessible without breaking visual boundaries.
**Action:** When implementing auto-redirects over several seconds, always sync a visually hidden `aria-live` span with the visual timer for aural clarity.
