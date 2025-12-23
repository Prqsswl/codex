# Bolt's Journal

## 2025-12-23 - Unnecessary re-renders in Ink CLI
**Learning:** `ink` applications are susceptible to performance issues from unnecessary re-renders just like web React apps. In `TerminalChat`, creating new object references for props (`headerProps`, `batch`) on every render caused `TerminalMessageHistory` to re-render even when data didn't change, triggered by frequent timer updates.
**Action:** Use `useMemo` for derived data and prop objects passed to expensive child components, especially in loops or frequently updating parents.
