## 2025-10-26 - Transient Feedback in TUI
**Learning:** Use `FrameRequester::schedule_frame_in(Duration)` to implement transient UI feedback (like 'Copied!') without blocking the main loop or requiring manual timer management in the widget.
**Action:** When adding temporary success states, ensure you schedule both an immediate redraw (to show state) and a delayed redraw (to clear state).
