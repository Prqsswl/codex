## 2026-01-24 - TUI Footer Grid Alignment
**Learning:** In `codex-rs/tui2`, the footer shortcut overlay uses a column-based layout that fills row-by-row. Semantic grouping requires careful ordering, and "spacers" (empty lines) are used to force items into specific columns or to balance the total count.
**Action:** When modifying the footer shortcuts, check the total item count. If the layout looks unbalanced or items shift columns unexpectedly, add or remove explicit spacer lines in the `ordered` vector. Verify with `insta` snapshots.
