## 2025-04-13 - [Redirect Countdown Accessibility]
**Learning:** Dynamically toggling visibility of an element and immediately updating its text can cause screen readers to miss the update. It's better to use a permanently present, visually hidden ARIA live region (`sr-only`) and delay the first update using `setTimeout(tick, 1000)` so the context is fully registered.
**Action:** Always use permanently present `aria-live` elements and `setTimeout` delays for initial dynamic text updates like countdowns.
