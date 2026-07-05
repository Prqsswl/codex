## 2024-07-05 - Accessible countdown regions
**Learning:** Dynamic redirect countdowns require a visually hidden `aria-live="polite"` element for reliable screen reader announcements, instead of modifying visible element text. The text should properly pluralize units ("second" vs "seconds") instead of abbreviations.
**Action:** Always include a dedicated, visually-hidden ARIA live announcer for countdowns to properly broadcast dynamic state updates to screen readers without interrupting them.
