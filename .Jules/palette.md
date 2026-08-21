## 2024-05-15 - Grammar Pluralization in Dynamic Announcements
**Learning:** Screen readers announce text exactly as written. "Redirecting in 1s" (or 1 seconds) feels unpolished. Properly pluralizing dynamic announcements (e.g., "1 second" vs "2 seconds") ensures a professional and accessible experience.
**Action:** When implementing countdowns or dynamic text, always use full words and ternary logic to handle pluralization correctly (e.g., `countdown === 1 ? ' second...' : ' seconds...'`). Also ensure the hardcoded initial HTML state matches the dynamic script.
