## 2025-05-26 - Added accessible countdown announcer to dynamic redirect
**Learning:** Redirect countdowns driven by JS `setTimeout` without `aria-live` cause screen readers to miss dynamic updates, confusing users as to why the page abruptly changes. Relying solely on visual text updates excludes a11y users.
**Action:** Always include a visually hidden `aria-live="polite"` and `aria-atomic="true"` announcer div when implementing JS countdowns or automatic redirects, and synchronously update its content with the visual timer.
