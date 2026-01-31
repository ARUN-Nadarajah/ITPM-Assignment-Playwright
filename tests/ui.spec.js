// @ts-check
const { test, expect } = require("@playwright/test");

/**
 * Tamil Transliteration - UI Test Cases
 * Tests user interface validation
 *
 * Total: 1 UI Test Case
 */

const BASE_URL = "https://tamil.changathi.com";

// ============================================
// UI TEST CASES (1 Test)
// ============================================

test.describe("UI Test Cases - Tamil Transliteration App", () => {
  test("UI_Test_0001 - Complete UI functionality test", async ({
    page,
  }, testInfo) => {
    // 1. Navigate to the page
    await page.goto(BASE_URL);
    await page.waitForLoadState("networkidle");

    // 2. Verify page title
    const title = await page.title();
    await testInfo.attach("page_title", {
      body: title,
      contentType: "text/plain",
    });
    expect(title).toBeTruthy();

    // 3. Verify input field exists and is visible
    const inputBox = page.locator('textarea, input[type="text"]').first();
    await expect(inputBox).toBeVisible({ timeout: 10000 });

    // 4. Verify page has loaded content
    const bodyContent = await page.locator("body").textContent();
    expect(bodyContent?.length || 0).toBeGreaterThan(0);

    // 5. Test input field is editable
    await expect(inputBox).toBeEditable();

    // 6. Test typing functionality
    await inputBox.clear();
    await inputBox.fill("test input");
    const value = await inputBox.inputValue();
    expect(value).toContain("test");

    // 7. Test clearing functionality
    await inputBox.clear();
    const clearedValue = await inputBox.inputValue();
    expect(clearedValue).toBe("");

    // 8. Test keyboard input
    await inputBox.focus();
    await page.keyboard.type("vanakkam");
    await page.keyboard.press("Space");
    await page.waitForTimeout(1500);

    const output = await inputBox.inputValue();
    await testInfo.attach("keyboard_input_result", {
      body: output,
      contentType: "text/plain",
    });
    expect(output.length).toBeGreaterThan(0);

    // 9. Take screenshot for documentation
    await page.screenshot({ path: "test-results/ui-complete-test.png" });
    await testInfo.attach("screenshot", {
      path: "test-results/ui-complete-test.png",
      contentType: "image/png",
    });

    // 10. Test responsive design - Desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(inputBox).toBeVisible();

    // 11. Test responsive design - Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);
    await expect(inputBox).toBeVisible();

    await testInfo.attach("test_summary", {
      body: "All UI tests passed: Page load, input field, keyboard, responsive design",
      contentType: "text/plain",
    });
  });
});
