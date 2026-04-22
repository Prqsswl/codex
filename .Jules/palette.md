## 2024-04-22 - [Dynamic countdown accessibility]
**Learning:** Using `aria-live` on a hidden element (e.g. `display: none`) and revealing it later is sometimes unreliable with screen readers. Also, when changing a clickable `<div>` to an `<a>` tag for semantics, explicit CSS resets like `text-decoration: none` and `color: inherit` are required.
**Action:** When creating a dynamic redirect countdown, ensure the ARIA live region is permanently present and visually hidden, and explicitly define link styling to prevent visual regressions while improving semantics.
