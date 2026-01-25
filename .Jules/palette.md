## 2024-05-22 - TUI Shortcut Discoverability
**Learning:** `TextArea` in `ratatui` (via `codex-tui2`) supports Emacs-style bindings (`Ctrl+u`/`Ctrl+k`) natively, but users won't know unless explicitly hinted in the footer.
**Action:** When adding or verifying TUI inputs, check for native bindings that are "invisible" and surface them in the shortcut overlay if they offer significant utility.
