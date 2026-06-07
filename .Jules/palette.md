## 2025-06-07 - Add accessibility properties to redirect countdown
**Learning:** Found a redirect countdown in `codex-rs/login/src/assets/success.html` that did not have accessibility features (`aria-live`, `aria-atomic`), which makes screen readers miss the countdown updates and the redirect action.
**Action:** Always add `aria-live` and `aria-atomic` to dynamically updating text content like countdowns to ensure screen reader users are notified of changes.
