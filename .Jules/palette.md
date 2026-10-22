## 2024-05-24 - Interactive Redirect Button
**Learning:** Found an accessibility issue where the redirect button in `success.html` is a `div` element without a `role` or `tabindex`, making it inaccessible via keyboard navigation.
**Action:** When using non-semantic HTML elements like `div` for interactive controls like links or buttons, always add `role="link"` or `role="button"`, `tabindex="0"`, and event listeners for both `click` and `keydown` (Enter/Space) to ensure keyboard interactability and screen reader support without changing visual styling.
