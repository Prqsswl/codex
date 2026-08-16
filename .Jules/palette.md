## 2024-08-16 - Dynamic ARIA Announcements Match Initial State
**Learning:** When making accessibility improvements to dynamic text like countdown timers, you must update both the hardcoded initial HTML text and the subsequent JavaScript updates. If the initial HTML states "3s" but JS updates to "2 seconds", the screen reader announcement is inconsistent. Adding `aria-live="polite"` ensures these updates are read to users.
**Action:** Always verify that dynamic string replacements visually and verbally align with the initial hardcoded HTML text.
