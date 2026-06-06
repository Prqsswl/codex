## 2025-02-20 - [ARIA Countdown Announcement]
**Learning:** When using a dynamic redirect countdown in an HTML page, screen readers will often miss the initial countdown if an `aria-live` element isn't present from page load or updated correctly along with the visual text.
**Action:** Place a visually hidden `aria-live="polite"` element in the DOM and ensure both the visual text and the ARIA text are updated simultaneously inside the `setTimeout` loop. Use inline styles to hide it instead of adding custom CSS classes when constrained to existing styles.
