## 2024-05-24 - Added aria-live to Success Pages
**Learning:** Using `aria-live="polite"` on statically rendered, hidden elements that are revealed via JS ensures screen readers read them aloud when they become visible. Using `aria-atomic="true"` on a countdown timer prevents screen readers from only reading "3s", "2s", etc. and ensures it reads the whole phrase.
**Action:** Remember to use `aria-live` and `aria-atomic` for dynamic text changes on static HTML pages where React/other frontend frameworks are not managing a11y automatically.
