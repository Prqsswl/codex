## 2025-02-14 - Accessible buttons without visual regressions
**Learning:** When boundary constraints prevent resetting default browser styles of an `<a>` tag, an accessible alternative is to retain the `<div>`, add `tabindex="0"`, `role="button"`, and explicit Javascript event listeners for both `click` and `keydown` (Enter/Space). This ensures keyboard interactivity without risking visual regressions from default link styling.
**Action:** Use this pattern when retrofitting legacy `div`-based buttons where CSS boundary constraints limit modifying element tags.
