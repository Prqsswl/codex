## 2024-05-24 - Accessible redirect countdowns
**Learning:** Dynamic text changes during redirect countdowns can be difficult for screen readers to announce properly, and raw seconds abbreviation ("s") sounds poor in text-to-speech.
**Action:** Always add `aria-live="polite"` and `aria-atomic="true"` to the text container, and implement grammatical pluralization ("second" vs "seconds") instead of abbreviations to improve screen reader pronunciation.
