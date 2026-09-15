## 2024-05-18 - Semantic Navigation in Login Flow
**Learning:** Replaced `div` elements used as interactive buttons with semantic `a` elements in the success login flow. This inherently provides expected focus states, pointer cursor, and makes the purpose (redirection) obvious to screen readers without relying on JavaScript event listeners and custom keydown handling.
**Action:** Always favor native HTML interactive elements (`<a>`, `<button>`) over styling `<div>` or `<span>` elements, especially for actions that involve navigation or redirection.
