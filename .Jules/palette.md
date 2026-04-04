## 2025-04-04 - Screen Reader Support for Dynamic State Changes
**Learning:** Dynamically shown dialogs and automatic redirect countdowns on simple HTML pages (like login success screens) require `aria-live="polite"` and `aria-atomic="true"` to ensure screen readers announce state changes without requiring manual user focus.
**Action:** Always verify that dynamically unhidden elements (e.g., via `display: none` to `display: flex`) have appropriate ARIA live regions if they contain important status updates or countdowns.
