## 2025-04-10 - Delaying First ARIA Live Region Update
**Learning:** When dynamically setting textContent for an ARIA live region followed by a periodic update (like a 1-second countdown), executing the first update synchronously can cause screen readers to swallow the initial context message.
**Action:** Use `setTimeout(tick, 1000)` to delay the first periodic update so the initial context message is safely announced without causing janky timer behavior.
