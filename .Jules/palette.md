## 2024-05-22 - TUI Shortcut Discoverability
**Learning:** Native Emacs bindings (like Ctrl+k) in `TextArea` are often implemented but hidden from users. Exposing them in the footer significantly improves power-user discoverability without cluttering the main UI.
**Action:** When working on TUI inputs, always check `textarea.rs` (or equivalent) for implemented-but-hidden keybindings and verify if they should be surfaced in help overlays.
