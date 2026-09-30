## 2024-09-30 - Focus state in success.html
**Learning:** Found an accessibility issue where the redirect button in `success.html` was implemented as a non-semantic `div` rather than a link or button, preventing keyboard focus and navigation.
**Action:** Changed the element to a semantic `<a>` tag with proper focus states to ensure keyboard accessibility.
