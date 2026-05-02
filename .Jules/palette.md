## 2024-05-02 - Accessible Redirect Countdowns
**Learning:** Dynamic redirect countdowns require an explicit `aria-live` region updated simultaneously with the visible text, and visually styled placeholder buttons should be semantic `<a>` links for keyboard accessibility.
**Action:** When implementing auto-redirects, always use semantic links, hide an `aria-live` announcer using inline styles to avoid custom CSS, and sync updates without artificial delays.
