## 2024-11-20 - Accessible countdown redirect link
**Learning:** For a redirect countdown, changing the button from a `<div>` to a semantic `<a>` link ensures keyboard focusability. Also, using an invisible `aria-live` element allows screen readers to announce countdown ticks reliably.
**Action:** When converting non-semantic divs to links, include basic resets (`text-decoration: none`, `color: inherit`) to prevent visual regressions while keeping changes localized, and hook up the `.href` dynamically in script so users can focus and click it directly.
