## 2024-05-24 - Accessible Dynamic Countdowns
**Learning:** Dynamic countdowns in static HTML templates (like `success.html`) lack screen reader visibility by default. Modifying only visual text without an `aria-live` region creates an inaccessible experience.
**Action:** When creating or modifying dynamic redirect countdowns, always pair visually updated text with a visually hidden `aria-live="polite"` DOM element and update both simultaneously. Ensure proper text pluralization (e.g., "1 second" vs "3 seconds") for a polished UX.
