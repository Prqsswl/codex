## 2024-06-29 - Accessible Redirect Countdowns
**Learning:** Dynamic text like "Redirecting in 3s..." is often missed or poorly announced by screen readers if it lacks proper ARIA roles or uses abbreviations.
**Action:** Implement `aria-live="polite"` on a visually hidden element (`aria-atomic="true"`) to announce countdown changes, and use proper grammar pluralization (e.g., "1 second" vs "3 seconds") for a more polished experience.
