## 2024-05-24 - Hidden Interaction Discoverability
**Learning:** `TextArea` shortcuts (like `Ctrl+u`, `Ctrl+k`) were fully functional but invisible to users because they were missing from the footer overlay. Hidden interactions = unused features.
**Action:** Always cross-reference widget event handlers (e.g., in `textarea.rs`) with the help/overlay UI (e.g., `footer.rs`) to ensure all capabilities are discoverable.
