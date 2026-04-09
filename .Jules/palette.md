## 2024-05-24 - ARIA Live Regions on Dynamic Countdowns
**Learning:** When dynamically setting textContent for an ARIA live region followed by a periodic update (like a 1-second countdown), synchronous updates will swallow the initial context message. Screen readers also fail to reliably announce elements transitioning from hidden to visible.
**Action:** Use a dedicated, visually hidden, permanently present DOM element for ARIA live regions instead of toggling display states. Use setTimeout to delay the first update so the initial message is read properly before the countdown starts.
