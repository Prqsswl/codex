## 2024-04-08 - ARIA Live Countdown Announcements
**Learning:** When creating visual countdowns (like redirecting in 3s...), screen readers may swallow the initial text if the node is instantly updated. We must maintain a permanent `aria-live` region in the DOM and use `setTimeout` to delay the first countdown tick so the initial context is read properly.
**Action:** Always place `aria-live` regions on dedicated, visually hidden, permanent elements rather than toggling visibility, and delay synchronous initial updates for countdowns.
