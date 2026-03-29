from playwright.sync_api import sync_playwright
import time

def verify(page):
    page.goto("file:///app/codex-rs/login/src/assets/success.html")
    # Take screenshot of the base state
    page.screenshot(path="/app/verification/base.png")

    page.goto("file:///app/codex-rs/login/src/assets/success.html?needs_setup=true")
    # Take screenshot of the setup state
    page.screenshot(path="/app/verification/setup.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify(page)
        finally:
            browser.close()
