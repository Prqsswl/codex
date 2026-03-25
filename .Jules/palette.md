## 2024-05-24 - Accessibility of Auto-Redirect Patterns
**Learning:** Using generic `<div>` tags for auto-redirect "buttons" that have text like "Redirecting in 3s..." creates an accessibility barrier. Screen reader users and keyboard navigators cannot interact with it as a fallback link if the javascript auto-redirect fails or is disabled.
**Action:** Always convert simulated auto-redirect UI boxes into semantic `<a>` tags with explicit `href` values and aria-labels, even if they are primarily intended to execute via JavaScript `window.location.replace`.
