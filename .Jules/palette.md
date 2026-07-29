## 2024-07-29 - Accessible Redirect Countdowns
**Learning:** When creating a dynamic redirect countdown (e.g., "Redirecting in 3s..."), screen readers may misread abbreviations or fail to announce updates if the text just changes on screen. Polling frequent visual changes can also be jarring if set to 'assertive'.
**Action:** Use a dedicated visually hidden (`.sr-only`) `aria-live="polite"` element for screen readers. Spell out time units completely ("3 seconds" vs "3s") with proper pluralization, and ensure the initial state is immediately populated so the first announcement isn't missed.
