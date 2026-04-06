## 2025-04-06 - Accessible Redirect Countdowns
**Learning:** Dynamically toggling the visibility of an element containing an ARIA live region can cause screen readers to fail to announce it reliably.
**Action:** When creating redirect countdowns, place an invisible ARIA live region (`aria-live="polite" aria-atomic="true"`) permanently on the page DOM (e.g., using `clip: rect(0,0,0,0)`) rather than toggling visibility. Additionally, ensure redirect buttons use semantic `<a>` tags to provide native keyboard focusability.
