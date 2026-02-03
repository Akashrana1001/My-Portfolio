from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Go to the app
        print("Navigating to app...")
        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")

        # Take screenshot of About (Top)
        print("Capturing About section...")
        page.screenshot(path="verify_fix_about.png")

        # Scroll to Experience
        print("Capturing Experience section...")
        page.evaluate("document.getElementById('experience').scrollIntoView()")
        time.sleep(2) # Wait for animations
        page.screenshot(path="verify_fix_experience.png")

        # Scroll to Projects
        print("Capturing Projects section...")
        page.evaluate("document.getElementById('projects').scrollIntoView()")
        time.sleep(2)
        page.screenshot(path="verify_fix_projects.png")

        # Scroll to Contact
        print("Capturing Contact section...")
        page.evaluate("document.getElementById('contact').scrollIntoView()")
        time.sleep(2)
        page.screenshot(path="verify_fix_contact.png")

        browser.close()
        print("Done.")

if __name__ == "__main__":
    run()
