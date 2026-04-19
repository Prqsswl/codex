## 2024-04-19 - Screen Reader Announcements for Dynamic Content
**Learning:** Toggling `display: none` to show elements containing `aria-live` regions can cause screen readers to miss the initial announcement.
**Action:** Always place `aria-live` regions on permanently present, visually hidden (e.g., `.sr-only` or absolute 1px) DOM elements and update their `textContent` rather than relying on container visibility.
