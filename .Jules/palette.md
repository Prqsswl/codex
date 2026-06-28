## 2024-06-28 - Added screen reader announcements for redirect countdown
**Learning:** Dynamic text that updates on a timer (like countdowns) needs both `aria-live` and grammatical pluralization (e.g. "1 second" vs "2 seconds") to be properly understood by screen readers. A visually hidden element with inline styling `clip: rect(0,0,0,0)` is a good pattern for creating an `aria-live` announcer.
**Action:** When creating redirect countdowns, add an `aria-live="polite"` element and update its text content simultaneously with the visual text, ensuring proper pluralization.
