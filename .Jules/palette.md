## 2024-05-24 - Screen Reader Announcement for Dynamic Redirects
**Learning:** Screen readers often fail to announce `aria-live` regions that are embedded within containers transitioning from `display: none` to visible.
**Action:** Always place `aria-live` regions on a dedicated, visually hidden, permanently present DOM element and update its text content dynamically, rather than toggling visibility on the container itself. Use inline styles to hide it instead of adding custom classes when constrained by design system boundaries.
