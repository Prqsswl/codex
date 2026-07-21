## 2024-07-21 - Accessible Dynamic Redirect Countdown
**Learning:** Screen readers perform best when dynamic announcements (like a 1s interval countdown) use `aria-live="polite"` on a dedicated, visually hidden static DOM element rather than toggling `display` or updating elements inline. Also, artificial delays in initial announcements can be avoided by immediately initializing the countdown content simultaneously with the visual text.
**Action:** Always create a persistent, visually hidden `.sr-only` style element for frequent announcements and initialize text explicitly before loops begin.
