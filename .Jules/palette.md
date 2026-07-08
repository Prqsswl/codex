## 2026-07-08 - Accessible Redirect Countdowns
**Learning:** Dynamic text generation like countdowns must properly sync with an `aria-live` region, and grammar pluralization (e.g., '1 second' vs 'X seconds') drastically improves the UX. Hardcoded initial text should match the dynamic text to prevent mismatches.
**Action:** Always add an `aria-live` visually hidden element for screen readers when updating dynamic states, ensure grammar rules apply, and sync initial HTML state with JS state.
