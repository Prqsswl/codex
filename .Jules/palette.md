## 2024-05-12 - Accessible Redirect Countdowns
**Learning:** Redirect countdowns need a permanently present visually hidden `aria-live` region to reliably announce text changes. Furthermore, using `setTimeout` initially to delay the first tick can freeze the countdown visually for an extra cycle.
**Action:** Initialize the `aria-live` content immediately based on the HTML default, and decrement the countdown variable *before* rendering the text and setting the timeout to prevent freezing on "0s".
