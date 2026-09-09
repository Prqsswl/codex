
## 2024-05-18 - Semantic Tags Over Divs
**Learning:** Even when a JavaScript redirect happens, using a semantic `<a>` tag with proper styling instead of a `<div>` for the visual indicator provides a massive accessibility win. It allows native keyboard focus, provides an explicit `href` for screen readers, and allows power users to click to bypass the wait.
**Action:** Always replace non-interactive `div` elements with proper semantic elements (like `a` or `button`) if they imply user interaction or navigation, even if JavaScript handles the core logic. Ensure default styling like `text-decoration: none` is added to match the visual design, and explicit `:focus-visible` styles are provided since default browser focus outlines might not contrast well with custom backgrounds.
