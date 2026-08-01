## 2024-08-01 - Accessible Redirect Countdowns
**Learning:** Dynamic text changes like countdowns (e.g., "Redirecting in 3s...") are not read by screen readers if they lack an `aria-live` region, and abbreviations like "s" can be read poorly.
**Action:** Always place dynamic redirect announcements in an `aria-live` region (visually hidden `.sr-only` is best for avoiding visual changes) and use full words (e.g., "seconds") with proper pluralization to ensure clear announcements.
