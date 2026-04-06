## 2025-04-06 - Accessible Redirect Countdowns
**Learning:** Dynamically setting textContent for an ARIA live region followed by a periodic update (like a countdown) can swallow the initial announcement for screen readers. Placing an invisible ARIA live region on the page permanently, rather than toggling visibility, works best.
**Action:** When creating redirect countdowns, use `setTimeout(tick, 2000)` to delay the first update so the initial context message is not synchronously overwritten. Additionally, ensure redirect buttons use semantic `<a>` tags for keyboard focusability.
