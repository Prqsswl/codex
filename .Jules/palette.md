## 2024-10-25 - Make redirect countdown accessible to screen readers
**Learning:** Redirect countdowns on isolated web pages (like the login success page) can be completely invisible to screen reader users if they just update plain text elements inside nested divs.
**Action:** When implementing an automatic redirect with a visual countdown, add an `aria-live="polite"` region explicitly meant for screen readers. By updating both the visual text and the aria-live region synchronously, we ensure all users get fair warning before their navigation context changes unexpectedly.
