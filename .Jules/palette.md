## 2025-02-24 - Accessible Dynamic States
**Learning:** Adding `aria-live="polite"` and `aria-atomic="true"` to dynamic redirect countdowns and dynamically shown success dialogs ensures screen readers properly announce these crucial state changes to users without requiring manual focus.
**Action:** Always verify that dynamic conditional UI containers (like post-login redirect countdowns) have appropriate `aria-live` attributes set for accessibility.
