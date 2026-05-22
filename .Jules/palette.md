## 2026-05-22 - Adding ARIA Announcer to Redirect Countdown
**Learning:** For automatic redirect countdowns, visual updates are not inherently read by screen readers. A dedicated aria-live region must be created and updated simultaneously with the visual text to ensure proper announcement without causing artificial delays.
**Action:** Always include a visually hidden `aria-live="polite"` element for dynamic countdown states, and ensure it is updated via JavaScript in parallel with the visible DOM node.
