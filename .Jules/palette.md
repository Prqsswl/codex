## 2024-04-18 - Accessible Redirect Countdowns
**Learning:** Dynamic countdown text within a visually toggled DOM element is unreliably announced by screen readers. Furthermore, using a <div> for a redirect button prevents keyboard navigation.
**Action:** Use a persistently rendered, visually hidden aria-live region (like .sr-only) synced with the visual countdown, and convert redirect buttons into semantic <a> links with inherited styles.
