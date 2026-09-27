## 2024-05-24 - Accessibility improvements to redirect flow
**Learning:** Redirect flows often use `div` elements visually styled as buttons but act as links. These are entirely missed by screen readers and cannot be focused. Additionally, dynamic countdowns are unannounced without `aria-live`.
**Action:** Always use semantic `<a>` tags for redirect links, ensuring they are keyboard-focusable (and add `focus-visible` styles!). Add `aria-live="polite"` to dynamic text like countdowns so screen reader users are aware of the impending redirect.
