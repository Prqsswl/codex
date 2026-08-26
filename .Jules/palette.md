## 2024-05-15 - Dynamic text grammar in countdowns
**Learning:** Hardcoded initial HTML state can mismatch with dynamic JavaScript updates for text, causing screen readers to misread abbreviations (like "s" for seconds) or have inconsistent grammar.
**Action:** Always ensure the hardcoded initial state matches the first state of dynamic text, and use proper grammar pluralization (e.g., '1 second' vs 'X seconds') in JavaScript updates.
