## 2024-05-18 - ARIA Live Regions for Dynamic Countdowns
**Learning:** When creating a dynamic redirect countdown (e.g. "Redirecting in 3s..."), using `display: none` toggles on a container with `aria-live` is unreliable for screen readers. Additionally, initial `setTimeout` delays can freeze the visual state.
**Action:** Place the `aria-live` attribute on a permanent, visually hidden `.sr-only` equivalent DOM node and update its textContent simultaneously. Execute the first tick immediately before the timeout loop starts.
