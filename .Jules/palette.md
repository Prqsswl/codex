## 2025-03-01 - Accessible Div as Button/Link
**Learning:** When strict boundaries prevent converting a non-semantic `<div>` to a semantic `<a>` tag (because default browser styles like blue text/underlines would violate visual constraints), an accessible alternative is retaining the `<div>` while adding `tabindex="0"`, `role="link"` (or `role="button"`), and event listeners for both `click` and `keydown` (Enter/Space).
**Action:** Use this pattern to improve keyboard navigation and screen reader support without causing visual regressions on tightly styled components.
