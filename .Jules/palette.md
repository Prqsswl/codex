## 2024-05-20 - ARIA Live Regions on Dynamic Elements
**Learning:** Screen readers often fail to announce updates if the `aria-live` element is within a container that transitions from `display: none` to visible.
**Action:** Place the ARIA live region on a dedicated, visually hidden, permanently present DOM element at the top of the body, and update its text content simultaneously with the visible dynamic text.
