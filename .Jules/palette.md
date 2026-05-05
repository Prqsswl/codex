## 2024-05-18 - Screen readers fail to announce dynamic redirect countdowns

**Learning:** When displaying dynamic redirect countdowns (e.g., "Redirecting in 3s..."), simply updating text content is not read by screen readers. Furthermore, applying `aria-live` to elements that transition from hidden to visible (like dynamic setup dialogs) can fail to trigger announcements reliably in some screen readers.

**Action:** Place `aria-live="polite"` and `aria-atomic="true"` on a dedicated, visually hidden (using inline styles, avoiding custom CSS classes to adhere to constraints) DOM element that is permanently present. Update this element simultaneously with the visible countdown to ensure reliable screen reader announcements.
