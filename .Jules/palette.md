## 2024-05-18 - Semantic Elements vs Non-Semantic Elements

**Learning:** Replacing non-semantic elements (`div`) with semantic elements (`a`) for better accessibility, such as providing a clear interactive redirect link, can introduce styling issues, but greatly improves accessibility, navigation, and compatibility.
**Action:** When replacing non-semantic elements with semantic elements, check what default styles will apply to ensure there are no visual regressions. Also, verify that elements meant to be interactive receive proper `:focus-visible` states to improve keyboard accessibility.
