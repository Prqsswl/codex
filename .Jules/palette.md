## 2024-05-23 - Discoverability of Text Editing Shortcuts
**Learning:** `TextArea` in `codex-rs/tui2` supports standard readline shortcuts like `Ctrl+u` (cut to start) and `Ctrl+k` (cut to end), but these were hidden from the user.
**Action:** Always check `TextArea` implementation for supported shortcuts and ensure they are exposed in the UI (e.g., footer overlay) to improve discoverability. Use "cut" instead of "kill" for better user understanding.
