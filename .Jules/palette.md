## 2024-03-30 - Screen Reader Accessibility on Redirect Countdowns
**Learning:** Automatically updating text (like countdowns) needs specific ARIA attributes for screen readers to announce the changes dynamically without requiring manual focus.
**Action:** Always add `aria-live="polite"` and `aria-atomic="true"` to elements where inner text updates automatically (such as a countdown redirect button) so users are notified of the state changes.
