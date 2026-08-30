## 2024-10-24 - Grammar in Countdown
**Learning:** Hardcoded abbreviations like "3s..." in dynamic countdowns don't read well for screen readers and lack professional grammar when the countdown hits 1 (e.g., "1s..."). By spelling out the time unit and handling pluralization ("3 seconds...", "1 second..."), we improve accessibility and provide a more polished user experience.
**Action:** Always use full words for time units in user-facing dynamic text and handle singular/plural forms correctly. Ensure the initial hardcoded HTML matches the first state of the JavaScript update.
