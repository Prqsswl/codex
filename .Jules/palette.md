## 2026-02-22 - [In-App Copy Feedback]
**Learning:** Users lack immediate visual confirmation when copying text from the TUI transcript, relying on implicit clipboard behavior.
**Action:** Implemented a transient "✓ Copied!" pill that replaces the copy hint for 2 seconds. This pattern (stateful UI feedback with auto-dismiss) can be reused for other transient actions like "Saved" or "Applied".
