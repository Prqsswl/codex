## 2025-03-05 - Accessible Redirect Countdowns
**Learning:** Using `div`s for redirect countdowns blocks keyboard navigation and screen readers from reading tick updates effectively.
**Action:** When creating redirect countdowns, wrap them in semantic `<a>` tags with `href` set to the redirect URL, and sync the countdown text updates to a visually hidden `aria-live` region (`#sr-announcer`) for accessibility.
