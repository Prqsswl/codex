## 2024-09-10 - Accessible Redirect Button
**Learning:** Found a missing link feature in success.html - the visual button lacked an actual `<a>` tag making it inaccessible.
**Action:** When adding accessible links styled as buttons, apply focus-visible styles to match button appearance, ensure `text-decoration: none` to prevent unintended link styling, and update Javascript to manipulate the `href` attribute rather than relying on generic clicks or just timeouts.
