## 2024-05-14 - Countdown accessibility

**Learning:** When using dynamic text generation for countdowns, single letter abbreviations like '3s' can be confusing when read by a screen reader. Additionally, if the initial HTML doesn't match the JS state, it can lead to confusion. Hardcoded text should match dynamic text. `aria-live` is also needed for announcements.

**Action:** Expand abbreviations to full words (e.g. 'seconds'), ensure proper pluralization (e.g., '1 second' vs '3 seconds'), match the hardcoded initial HTML with the JS, and use `aria-live="polite"` on the container.
