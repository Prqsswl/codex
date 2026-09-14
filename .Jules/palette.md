## 2024-09-14 - Improve API org setup redirect flow
**Learning:** Found an accessibility issue where the auto-redirect fallback in `success.html` used a `div` styled as a button instead of an interactive element (`<a>` or `<button>`). Keyboard users and screen readers couldn't focus or activate it to bypass the countdown.
**Action:** Always use semantic interactive elements (`<a>` for links) even for fallback UI, and ensure proper ARIA attributes like `aria-label` are provided when the text isn't fully descriptive of the action.
