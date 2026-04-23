
## 2024-04-23 - Accessible Redirect Countdown
**Learning:** Dynamically shown dialogs and redirect countdowns must use an always-present visually-hidden ARIA live region rather than toggling display, as screen readers may miss announcements of newly visible elements. Pseudo-buttons for redirects should be semantic `<a>` tags with minimal CSS resets.
**Action:** Always place ARIA live regions on a dedicated, visually hidden (e.g., using a `.sr-only` class pattern) and permanently present DOM element.
