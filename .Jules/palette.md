## 2024-08-08 - Redirect Countdown Accessibility
**Learning:** Redirect countdowns on static HTML pages need to announce their updates dynamically to screen readers. Short abbreviations like "3s..." in dynamic text can be confusing or missed by screen readers.
**Action:** Use an `aria-live` element outside of the changing text to reliably announce countdown changes, expand abbreviations to full words (e.g., "seconds" and "second"), and properly pluralize units.
