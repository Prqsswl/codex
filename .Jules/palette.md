## 2024-04-30 - Accessible redirect countdowns
**Learning:** Screen readers often fail to announce content in elements transitioning from hidden to visible. Also, visually styled div buttons lack focusability and enter-key support.
**Action:** Always use a permanently present, visually hidden element with `aria-live="polite"` and `aria-atomic="true"` for announcements. Change pseudo-buttons (`<div>`) into semantic `<a href="...style="text-decoration: none;">` links for automatic keyboard accessibility and click-to-skip support.
