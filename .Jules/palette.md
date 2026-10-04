## 2024-05-18 - Improve redirect button accessibility
**Learning:** Found a div pretending to be a button/link (`<div class="redirect-button">`) in the authentication success page, lacking focus outlines or real interactability. This makes it hard for keyboard/screen reader users to trigger the manual redirect.
**Action:** Changed it to a semantic `<a>` tag, populated the `href` via JavaScript instead of using `window.location.replace` when clicked (though the timeout still works), and added `:focus-visible` CSS rules for keyboard navigation.
