## 2025-06-14 - Accessible Countdown Redirects
**Learning:** Found an accessibility issue pattern in this app's components where dynamic countdown redirects fail to announce themselves to screen readers, causing unexpected behavior when the page ultimately redirects.
**Action:** When implementing auto-redirects with countdowns, always add a visually hidden `aria-live="polite"` and `aria-atomic="true"` announcer region. Update this region simultaneously with the visual countdown text so screen reader users are notified of the impending redirect in real-time.
