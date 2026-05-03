## 2024-05-03 - Accessible Countdown Redirect
**Learning:** Dynamically shown dialogs and redirect countdowns must use `aria-live='polite'` and `aria-atomic='true'`. It is best practice to place this ARIA live region on a dedicated, visually hidden permanently present DOM element rather than toggling `display: none` on the container, as some screen readers fail to reliably announce elements transitioning from hidden to visible.
**Action:** Always include a dedicated `#a11y-announcer` with inline visually-hidden styles for accessible dynamic updates in vanilla HTML pages.
