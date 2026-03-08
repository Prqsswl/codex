## 2025-02-14 - Keyboard Shortcut Discoverability
**Learning:** Terminal applications often support standard readline/emacs shortcuts (like Ctrl+u to cut to start and Ctrl+k to cut to end), but users are frequently unaware of them unless they are explicitly documented in the UI. Exposing these existing capabilities provides an immediate UX win with minimal code changes.
**Action:** When working on CLI/TUI interfaces, proactively add UI hints for standard keyboard shortcuts that are already supported by the underlying text input components to improve discoverability and accessibility.
