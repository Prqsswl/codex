## 2024-05-18 - Added semantic <a> tag for auto-redirect button
**Learning:** Found an accessibility issue where the auto-redirect button (`.redirect-button`) was a non-interactive `<div>` without semantic meaning, making it inaccessible to keyboard navigation and screen readers.
**Action:** Replaced the `<div>` with an `<a>` tag, set its `href` to the redirect URL dynamically, and added an `aria-label`. Added `:hover` and `:focus-visible` styles to provide clear visual feedback during keyboard navigation. Always ensure interactive elements that behave like links use the `<a>` tag.
