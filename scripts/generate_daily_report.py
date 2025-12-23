import os
from playwright.sync_api import sync_playwright

# Content Data
TITLE = "סיכום התקדמות יומי - פרויקט Codex"
SUBTITLE = "מאת: Bolt (סוכן ביצועים)"
DATE = "23 בדצמבר 2025"

CONTENT = {
    "intro": """
    <p>היום התמקדנו בחיזוק היסודות של מערכת Codex. בתור ה-Agent האחראי על ביצועים (Bolt),
    הבטחתי שהקוד יהיה לא רק פונקציונלי אלא גם מהיר, בטוח וקריא.</p>
    <p>המערכת בנויה כעת כשני חלקים עיקריים הפועלים בסנכרון מושלם: מנוע Rust עוצמתי וממשק CLI גמיש.</p>
    """,
    "rust": {
        "title": "המנוע: Codex-RS",
        "desc": """
        <p>ליבת המערכת כתובה ב-Rust כדי להבטיח ביצועים מקסימליים ובטיחות זיכרון.</p>
        <ul>
            <li><strong>Sandbox:</strong> סביבה מבודדת להרצת קוד בטוחה.</li>
            <li><strong>MCP Server:</strong> פרוטוקול תקשורת מודרני (Model Context Protocol).</li>
            <li><strong>ביצועים:</strong> אופטימיזציה של זמני טעינה ועיבוד מקבילי.</li>
        </ul>
        """
    },
    "cli": {
        "title": "הממשק: Codex-CLI",
        "desc": """
        <p>כלי ה-CLI מאפשר אינטראקציה חלקה עם המערכת דרך הטרמינל.</p>
        <ul>
            <li><strong>Ink & React:</strong> בניית ממשק משתמש עשיר בתוך הטרמינל.</li>
            <li><strong>חווית משתמש:</strong> פלט ברור, צבעוני ואינטראקטיבי.</li>
            <li><strong>אינטגרציה:</strong> חיבור ישיר למנוע ה-Rust.</li>
        </ul>
        """
    },
    "future": {
        "title": "החזון: YouTube Recommendations",
        "desc": """
        <p>השלב הבא בפרויקט הוא הטמעת מערכת ההמלצות המותאמת אישית.</p>
        <p>המערכת תשתמש בבסיס ידע (Knowledge Base) המכיל נתונים על:</p>
        <ul>
            <li>100 הערוצים המובילים.</li>
            <li>טרנדים חמים וניתוח נושאים.</li>
            <li>רעיונות ליצירת תוכן חדשני.</li>
        </ul>
        """
    }
}

def generate_pie_chart_svg():
    # Simple SVG Pie Chart: Rust (60%), TypeScript (40%)
    return """
    <svg width="200" height="200" viewBox="0 0 32 32">
      <circle r="16" cx="16" cy="16" fill="#ddd" />
      <circle r="16" cx="16" cy="16" fill="#DEA584" stroke="#DEA584" stroke-width="32" stroke-dasharray="60 100" />
      <circle r="16" cx="16" cy="16" fill="#3178C6" stroke="#3178C6" stroke-width="32" stroke-dasharray="40 100" stroke-dashoffset="-60" />
      <text x="16" y="16" text-anchor="middle" dy="0.3em" fill="white" font-size="5" font-family="sans-serif">Code</text>
    </svg>
    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 10px;">
        <span style="color: #DEA584;">● Rust (60%)</span>
        <span style="color: #3178C6;">● TypeScript (40%)</span>
    </div>
    """

def generate_arch_svg():
    # Simple Flow Diagram
    return """
    <svg width="600" height="150" xmlns="http://www.w3.org/2000/svg">
      <!-- Nodes -->
      <rect x="10" y="50" width="120" height="50" rx="5" fill="#3178C6" />
      <text x="70" y="80" text-anchor="middle" fill="white" font-family="sans-serif">User (CLI)</text>

      <rect x="240" y="50" width="120" height="50" rx="5" fill="#DEA584" />
      <text x="300" y="80" text-anchor="middle" fill="white" font-family="sans-serif">Rust Engine</text>

      <rect x="470" y="50" width="120" height="50" rx="5" fill="#4CAF50" />
      <text x="530" y="80" text-anchor="middle" fill="white" font-family="sans-serif">Sandbox</text>

      <!-- Arrows -->
      <line x1="130" y1="75" x2="240" y2="75" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="360" y1="75" x2="470" y2="75" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />

      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#333" />
        </marker>
      </defs>
    </svg>
    """

HTML_TEMPLATE = f"""
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <style>
        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 40px;
        }}
        .page {{
            background: white;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            border-radius: 8px;
            page-break-after: always;
            min-height: 600px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
        }}
        h1 {{
            color: #2c3e50;
            font-size: 36px;
            border-bottom: 4px solid #3498db;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }}
        h2 {{
            color: #2980b9;
            font-size: 28px;
            margin-top: 0;
        }}
        p, li {{
            font-size: 18px;
            line-height: 1.6;
        }}
        .header-section {{
            text-align: center;
            margin-bottom: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px;
            border-radius: 8px;
        }}
        .header-section h1 {{
            color: white;
            border: none;
        }}
        .card-container {{
            display: flex;
            gap: 20px;
            margin-top: 20px;
        }}
        .card {{
            flex: 1;
            background: #ecf0f1;
            padding: 20px;
            border-radius: 8px;
            border-right: 5px solid #3498db;
        }}
        .infographic {{
            text-align: center;
            margin: 30px 0;
            padding: 20px;
            background: white;
            border: 1px solid #eee;
            border-radius: 8px;
        }}
        .footer {{
            margin-top: auto;
            text-align: center;
            font-size: 14px;
            color: #7f8c8d;
            border-top: 1px solid #eee;
            padding-top: 10px;
        }}
    </style>
</head>
<body>

    <!-- Cover Page -->
    <div class="page" style="justify-content: center; align-items: center; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
        <div style="text-align: center;">
            <h1 style="font-size: 48px; border: none; color: #2c3e50;">{TITLE}</h1>
            <h3 style="color: #555;">{SUBTITLE}</h3>
            <p style="color: #777;">{DATE}</p>
        </div>
    </div>

    <!-- Intro Page -->
    <div class="page">
        <h2>מבוא: משימת הביצועים</h2>
        {CONTENT['intro']}

        <div class="infographic">
            <h3>ארכיטקטורת המערכת</h3>
            {generate_arch_svg()}
            <p style="font-size: 14px; color: #666;">זרימת המידע בין הרכיבים</p>
        </div>
    </div>

    <!-- Tech Dive -->
    <div class="page">
        <h2>הטכנולוגיה מאחורי הקלעים</h2>

        <div class="card-container">
            <div class="card">
                <h3>Rust Engine</h3>
                {CONTENT['rust']['desc']}
            </div>
            <div class="card" style="border-right-color: #e74c3c;">
                <h3>Codex CLI</h3>
                {CONTENT['cli']['desc']}
            </div>
        </div>

        <div class="infographic">
            <h3>הרכב הקוד בפרויקט</h3>
            {generate_pie_chart_svg()}
        </div>
    </div>

    <!-- Future Page -->
    <div class="page">
        <h2>העתיד: YouTube Recommendations</h2>
        {CONTENT['future']['desc']}

        <div style="margin-top: 40px; padding: 20px; background: #fff3cd; border: 1px solid #ffeeba; border-radius: 8px; color: #856404;">
            <strong>סטטוס נוכחי:</strong> מודל הידע נמצא בפיתוח. קבצי ה-JSON הכוללים את ה-Top 100 Channels והטרנדים ישולבו בגרסה הבאה.
        </div>

        <div class="footer">
            נוצר על ידי Bolt | כל הזכויות שמורות
        </div>
    </div>

</body>
</html>
"""

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Set content
        page.set_content(HTML_TEMPLATE)

        # Generate PDF
        # format='A4', landscape=True, print_background=True for colors
        page.pdf(path="daily_report.pdf", format="A4", landscape=True, print_background=True)

        browser.close()
        print("PDF generated successfully: daily_report.pdf")

if __name__ == "__main__":
    main()
