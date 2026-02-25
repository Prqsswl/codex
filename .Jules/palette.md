## 2026-02-25 - Discoverability of Emacs-Style Text Shortcuts
**Learning:** Users who use standard readline/Emacs shortcuts (Ctrl+u, Ctrl+k) in other terminal tools may not realize they are supported in custom TUI text areas unless explicitly shown.
**Action:** When using TUI libraries that support Emacs-style bindings, always add them to the help/shortcuts overlay to aid discoverability for power users.
## 2026-02-25 - Fix GitHub CLI Script Execution in CI Forks
**Learning:** Scripts using the  CLI to query repository artifacts must explicitly specify the upstream repository with  (e.g., ) to work correctly when run from a fork in CI.
**Action:** Always include  when using  commands in build/release scripts.
## 2026-02-25 - Fix GitHub CLI Script Execution in CI Forks
**Learning:** Scripts using the `gh` CLI to query repository artifacts must explicitly specify the upstream repository with `--repo` (e.g., `openai/codex`) to work correctly when run from a fork in CI.
**Action:** Always include `--repo {GITHUB_REPO}` when using `gh` commands in build/release scripts.
