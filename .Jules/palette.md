## 2024-06-25 - Improve accessibility of redirect button in login success page
**Learning:** In the login success page, the redirect button to platform.openai.com was a `<div>` element instead of an `<a>` element. Using semantic HTML like `<a>` for links is important for accessibility so screen readers and keyboard users can interact with it naturally. Also setting its `href` to the redirect URL dynamically.
**Action:** Always prefer semantic HTML elements (like `<a>` for links) when appropriate, and ensure focus and behavior works as expected for screen reader users.
