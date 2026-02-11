## 2024-05-22 - Adding Footer Shortcuts
**Learning:** Adding shortcuts to the footer requires updates in `ShortcutId`, `SHORTCUTS`, and `shortcut_overlay_lines` in `codex-rs/tui2/src/bottom_pane/footer.rs`. Crucially, this affects snapshots in both `footer_snapshots` and `chat_composer` tests.
**Action:** When modifying footer shortcuts, update logic then run `INSTA_UPDATE=always cargo test -p codex-tui2` to catch all snapshot changes.
