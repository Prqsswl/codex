## 2024-05-23 - TUI Footer Shortcuts
**Learning:** Adding shortcuts to the footer overlay in `codex-rs/tui2` requires updating `ShortcutId` enum, `SHORTCUTS` constant, and `shortcut_overlay_lines` function in `src/bottom_pane/footer.rs`.
**Action:** Always check `shortcut_overlay_lines` for layout logic and update snapshots with `INSTA_UPDATE=always` after modifying TUI text.
