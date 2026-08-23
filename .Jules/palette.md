## 2024-05-24 - Accessible Dynamic Countdowns
**Learning:** Screen readers announce dynamic text updates more reliably when full words ("seconds") are used instead of abbreviations ("s"), and proper pluralization enhances the user experience for everyone. In addition, the aria-live attribute ensures updates are announced as they happen.
**Action:** Always use full words for time units and proper pluralization ("1 second" vs "2 seconds") in dynamic UI text, and apply aria-live to containers updating dynamically.
