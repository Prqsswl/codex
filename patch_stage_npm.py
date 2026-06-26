import sys

filepath = 'scripts/stage_npm_packages.py'
with open(filepath, 'r') as f:
    content = f.read()

# Fix resolve_release_workflow string matching
old_script = '''    stdout = subprocess.check_output(
        [
            "gh",
            "run",
            "list",
            "--branch",
            f"rust-v{version}",
            "--json",
            "workflowName,url,headSha",
            "--workflow",
            WORKFLOW_NAME,
            "--jq",
            "first(.[])",
        ],
        cwd=REPO_ROOT,
        text=True,
    )
    if not workflow:
        raise RuntimeError(f"Unable to find rust-release workflow for version {version}.")
    return workflow'''

new_script = '''    stdout = subprocess.check_output(
        [
            "gh",
            "run",
            "list",
            "--json",
            "workflowName,url,headSha,headBranch",
            "--workflow",
            WORKFLOW_NAME,
        ],
        cwd=REPO_ROOT,
        text=True,
    ).strip()

    workflows = json.loads(stdout or "[]")
    workflow = None
    target_branch = f"rust-v{version}"
    for wf in workflows:
        if wf.get("headBranch") == target_branch:
            workflow = wf
            break

    if not workflow:
        raise RuntimeError(f"Unable to find rust-release workflow for version {version}.")
    return workflow'''

content = content.replace(old_script, new_script)

with open(filepath, 'w') as f:
    f.write(content)
