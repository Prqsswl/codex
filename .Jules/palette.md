## 2024-07-30 - Fix redirect countdown accessibility
**Learning:** Redirect countdowns on plain HTML pages are often completely inaccessible to screen readers because visual updates to inner text without `aria-live` are not announced. Also, using "3s..." instead of "3 seconds..." provides a poor screen reader experience because "s" might not be read as "seconds".
**Action:** Always add an `aria-live="polite"` visually hidden element and sync the text. Ensure units are spelled out completely and properly pluralized based on grammar.
