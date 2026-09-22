## 2024-05-18 - [Fix Success Page Semantic Elements]
**Learning:** For a single clickable container, `<div>`s styled like buttons with JavaScript click handlers reduce screen reader and keyboard accessibility, and also cause layout rendering bugs. Converting the tag to `<a>` ensures standard keyboard interactions and easier tracking.
**Action:** Always favor standard semantic elements (`<a>`, `<button>`) instead of manually applying JavaScript behavior to `<div>` elements for navigation.
