## 2024-04-11 - [ARIA Live Countdown Context Swallowing]
**Learning:** When creating a dynamic countdown timer with `aria-live`, executing the first tick synchronously can overwrite the initial context message before screen readers announce it. Furthermore, it's safer to use a permanent visually hidden element rather than toggling `display: none` on the container.
**Action:** Use a dedicated `.sr-only` element for `aria-live` and use `setTimeout(tick, 1000)` instead of `tick()` for the initial countdown trigger.
