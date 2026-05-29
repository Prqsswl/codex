## 2024-05-29 - Accessible Redirect Countdown
**Learning:** ARIA live regions for frequent updates (like a per-second redirect countdown) must be `polite` (not `assertive`), permanently present in the DOM, and visually hidden using inline styles (when restricted from custom CSS) rather than toggling `display: none` on the container.
**Action:** Always add a visually hidden `aria-live="polite"` element that updates in sync with visual countdowns to ensure screen readers announce the progress correctly without constant interruption.
