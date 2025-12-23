import os
import re
import markdown
import datetime
from pathlib import Path

# Configuration
SOURCE_DIR = "/tmp/file_attachments"
OUTPUT_FILE = "processed_book/book.html"
EXCLUDE_DIRS = ["__MACOSX", ".git", ".DS_Store"]
EXCLUDE_FILES = [".DS_Store"]

# CSS Styling (Invested Look)
CSS_STYLES = """
    :root {
        --bg-color: #fcfcfc;
        --text-color: #333;
        --sidebar-bg: #f0f0f0;
        --accent-color: #2c3e50;
        --link-color: #3498db;
        --border-color: #e0e0e0;
        --font-main: 'Heebo', sans-serif;
        --font-mono: 'Fira Code', monospace;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: var(--font-main);
        background-color: var(--bg-color);
        color: var(--text-color);
        direction: rtl;
        display: flex;
        min-height: 100vh;
        line-height: 1.6;
    }

    /* Sidebar Navigation */
    .sidebar {
        width: 300px;
        background-color: var(--sidebar-bg);
        border-left: 1px solid var(--border-color);
        padding: 20px;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        overflow-y: auto;
        box-shadow: -2px 0 5px rgba(0,0,0,0.05);
        z-index: 100;
    }

    .sidebar h2 {
        margin-top: 0;
        font-size: 1.2rem;
        color: var(--accent-color);
        border-bottom: 2px solid var(--accent-color);
        padding-bottom: 10px;
    }

    .toc ul {
        list-style-type: none;
        padding: 0;
    }

    .toc li {
        margin-bottom: 8px;
    }

    .toc a {
        text-decoration: none;
        color: var(--text-color);
        font-size: 0.9rem;
        display: block;
        padding: 4px 8px;
        border-radius: 4px;
        transition: background 0.2s;
    }

    .toc a:hover {
        background-color: rgba(0,0,0,0.05);
        color: var(--link-color);
    }

    .toc .category-title {
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 5px;
        color: var(--accent-color);
        font-size: 0.95rem;
    }

    /* Main Content */
    .main-content {
        margin-right: 320px; /* Sidebar width + gap */
        padding: 40px 60px;
        max-width: 900px;
        flex: 1;
    }

    .chapter {
        background: #fff;
        padding: 40px;
        margin-bottom: 50px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        border: 1px solid var(--border-color);
    }

    .chapter h1 {
        color: var(--accent-color);
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 15px;
        margin-top: 0;
    }

    .chapter h2 { color: #444; margin-top: 30px; }
    .chapter h3 { color: #555; }

    code {
        background-color: #f4f4f4;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: var(--font-mono);
        font-size: 0.9em;
    }

    pre {
        background-color: #282c34;
        color: #abb2bf;
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
        direction: ltr; /* Code blocks LTR */
        text-align: left;
    }

    blockquote {
        border-right: 4px solid var(--link-color);
        margin: 20px 0;
        padding: 10px 20px;
        background-color: #f8f9fa;
        color: #555;
        font-style: italic;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        margin: 20px 0;
        display: block;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        margin: 20px 0;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: right;
    }

    th {
        background-color: #f2f2f2;
        color: var(--accent-color);
    }

    /* Print / PDF styles */
    @media print {
        .sidebar { display: none; }
        .main-content { margin-right: 0; width: 100%; max-width: none; }
        .chapter { box-shadow: none; border: none; page-break-after: always; }
        body { background-color: #fff; }
    }

    /* Responsive */
    @media (max-width: 768px) {
        body { flex-direction: column; }
        .sidebar {
            width: 100%;
            position: relative;
            border-left: none;
            border-bottom: 1px solid var(--border-color);
            padding: 10px;
            box-sizing: border-box;
            height: auto;
        }
        .main-content {
            margin-right: 0;
            padding: 20px;
        }
    }
"""

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ספר המסע - הארכיון המלא</title>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700&family=Fira+Code&display=swap" rel="stylesheet">
    <style>
        {css}
    </style>
</head>
<body>

<div class="sidebar">
    <h2>תוכן העניינים</h2>
    <div class="toc" id="toc">
        <!-- TOC_CONTENT -->
    </div>
</div>

<div class="main-content">
    <div class="chapter">
        <h1 style="text-align: center; font-size: 3rem; margin-bottom: 1rem;">ספר המסע</h1>
        <h3 style="text-align: center; color: #666;">הארכיון המלא | נובמבר 2025</h3>
        <p style="text-align: center;">אוסף מסמכים, דוחות, וסיפורים מתוך המסע עם הבינה המלאכותית.</p>
        <p style="text-align: center; font-size: 0.8rem; color: #999;">נוצר אוטומטית על ידי מערכת Codex</p>
    </div>

    <!-- BOOK_CONTENT -->
</div>

</body>
</html>
"""

def get_category(filename):
    """Categorizes a file based on its name."""
    name = filename.lower()

    if "אינדקס-ראשי" in name or name.startswith("00-"):
        return "00_intro", "מבוא ואינדקס"
    if name.startswith(("01-", "02-", "03-", "04-", "05-", "06-", "07-", "10-", "31-")):
        return "01_core", "פרקי לימוד ומחקר"
    if "העיתונאי-הקוונטי" in name:
        return "02_story", "העיתונאי הקוונטי"
    if "דוח" in name or "report" in name or "status" in name or "סטטוס" in name:
        return "03_reports", "דוחות וסטטוסים"
    if "שיחה" in name or "conversation" in name or "chat" in name:
        return "04_chats", "שיחות ותמלולים"
    if "marvel" in name:
        return "05_marvel", "יקום מארוול"
    if "readme" in name:
        return "99_meta", "מידע מערכת"

    return "06_general", "מסמכים כלליים"

def process_files():
    files_by_category = {}

    # 1. Collect files
    for root, dirs, files in os.walk(SOURCE_DIR):
        # Filter directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]

        for file in files:
            if file in EXCLUDE_FILES or file.startswith("._"):
                continue

            if not (file.endswith(".md") or file.endswith(".txt")):
                continue

            filepath = os.path.join(root, file)
            cat_key, cat_name = get_category(file)

            if cat_key not in files_by_category:
                files_by_category[cat_key] = {"name": cat_name, "files": []}

            files_by_category[cat_key]["files"].append(filepath)

    # 2. Sort categories and files
    sorted_cat_keys = sorted(files_by_category.keys())

    toc_html = []
    content_html = []

    # Create Markdown converter
    md = markdown.Markdown(extensions=['fenced_code', 'tables', 'nl2br'])

    chapter_count = 0

    for key in sorted_cat_keys:
        cat_data = files_by_category[key]
        cat_name = cat_data["name"]

        # Add Category Header to TOC
        toc_html.append(f'<div class="category-title">{cat_name}</div><ul>')

        # Sort files (alphabetical is usually fine, but let's try natural sort if possible, otherwise alpha)
        cat_data["files"].sort()

        for filepath in cat_data["files"]:
            filename = os.path.basename(filepath)
            display_name = os.path.splitext(filename)[0].replace("-", " ").replace("_", " ")

            # Clean up display name (remove hash-like suffixes often found in Notion exports)
            display_name = re.sub(r'\s[a-f0-9]{32}$', '', display_name)

            chapter_id = f"chap-{chapter_count}"
            chapter_count += 1

            # Add to TOC
            toc_html.append(f'<li><a href="#{chapter_id}">{display_name}</a></li>')

            # Read Content
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    text = f.read()
            except UnicodeDecodeError:
                try:
                    with open(filepath, 'r', encoding='latin-1') as f: # Fallback
                         text = f.read()
                except:
                    text = f"Error reading file: {filename}"

            # Convert to HTML
            # If txt, wrap in code block or preserve newlines?
            # Markdown 'nl2br' extension helps with simple line breaks.

            html_content = md.convert(text)

            # Add to Content
            content_html.append(f"""
            <div class="chapter" id="{chapter_id}">
                <h1>{display_name}</h1>
                <div class="content">
                    {html_content}
                </div>
                <div style="margin-top: 30px; border-top: 1px dashed #eee; padding-top: 10px; color: #aaa; font-size: 0.8rem;">
                    מקור: {filename}
                </div>
            </div>
            """)

        toc_html.append("</ul>")

    # 3. Assemble Final HTML
    full_toc = "\n".join(toc_html)
    full_content = "\n".join(content_html)

    final_html = HTML_TEMPLATE.format(css=CSS_STYLES)
    final_html = final_html.replace("<!-- TOC_CONTENT -->", full_toc)
    final_html = final_html.replace("<!-- BOOK_CONTENT -->", full_content)

    # 4. Write Output
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(final_html)

    print(f"Book generated successfully at: {OUTPUT_FILE}")
    print(f"Total chapters: {chapter_count}")

if __name__ == "__main__":
    process_files()
