## 2025-02-28 - Accessible Redirect Countdowns
**Learning:** Screen readers often miss dynamic countdown text updates if they are only visual, and abbreviated times like "3s" sound unnatural or confusing when read aloud.
**Action:** When implementing dynamic countdowns or progress updates, always include a visually hidden `aria-live="polite"` region and ensure the text uses proper grammar pluralization (e.g., "1 second" vs "3 seconds") and is synced to the ARIA region.
