// @ts-check
const { test, expect } = require("@playwright/test");

/**
 * Tamil Transliteration - Negative Test Cases
 * Tests abnormal or unexpected inputs to detect flawed behavior.
 *
 * Total: 10 Negative Test Cases
 */

const BASE_URL = "https://tamil.changathi.com";

/**
 * Types text character by character with delay
 * @param {import('@playwright/test').Page} page
 * @param {import('@playwright/test').Locator} locator
 * @param {string} text
 * @param {number} delay
 */
async function typeWithDelay(page, locator, text, delay = 30) {
  for (const char of text) {
    await locator.press(char);
    await page.waitForTimeout(delay);
  }
}

/**
 * Runs a negative test case to detect abnormal behavior
 * @param {import('@playwright/test').Page} page
 * @param {import('@playwright/test').TestInfo} testInfo
 * @param {string} input - Abnormal or unexpected input
 * @param {string} expected - Expected output that indicates abnormal behavior
 */
async function runNegativeTest(page, testInfo, input, expected) {
  await page.goto(BASE_URL);

  // Wait for page to load - use domcontentloaded for faster loading
  await page.waitForLoadState("domcontentloaded");

  // Find input field
  const inputBox = page.locator('textarea, input[type="text"]').first();
  await expect(inputBox).toBeVisible({ timeout: 5000 });

  // Clear and type input
  await inputBox.clear();
  await typeWithDelay(page, inputBox, input);

  // Trigger conversion
  await inputBox.press("Space");

  // Wait for conversion with retry logic - reduced wait time and attempts
  let output = "";
  for (let i = 0; i < 5; i++) {
    await page.waitForTimeout(300);
    output = await inputBox.inputValue();
    if (output.includes(expected)) break;
  }

  // Attach test data
  await testInfo.attach("input", { body: input, contentType: "text/plain" });
  await testInfo.attach("expected", {
    body: expected,
    contentType: "text/plain",
  });
  await testInfo.attach("output", { body: output, contentType: "text/plain" });

  // Verify result
  expect(output).toContain(expected);
}

// ============================================
// NEGATIVE TEST CASES (Abnormal Inputs)
// ============================================

test.describe("Abnormal Input Test Cases - Tamil Transliteration", () => {
  

  test("Neg_Fun_001 - Time format handling", async ({ page }, testInfo) => {
      await runNegativeTest(
        page,
        testInfo,
        "7.30 AM ku kelambu",
        "7.30 AM கு கிளம்பு"
      );
    });

  test("Neg_Fun_002 - Line break input", async ({ page }, testInfo) => {
      await runNegativeTest(
        page,
        testInfo,
        "naan veetukku poren\nnee varuviya",
        "நான் வீட்டுக்கு போறேன்\nநீ வருவியா"
      );
    });

  

  test("Neg_Fun_003 - Numbers and currency handling", async ({
      page,
    }, testInfo) => {
      await runNegativeTest(
        page,
        testInfo,
        "naan Rs. 2500 kuduthen",
        "நான் Rs. 2500 குடுத்தேன்"
      );
    });

  test("Neg_Fun_004 - Joined word robustness", async ({ page }, testInfo) => {
      await runNegativeTest(
        page,
        testInfo,
        "naanveetukkuporen",
        "நான் வீட்டுக்கு போறேன்"
      );
    });

  test("Neg_Fun_005 - Units of measurement", async ({ page }, testInfo) => {
    await runNegativeTest(page, testInfo, "avan 10kg cake vaankinaan", "அவன் 10kg கேக் வாங்கினான் ");
  });

  test("Neg_Fun_006 - Single character input", async ({ page }, testInfo) => {
    await runNegativeTest(page, testInfo, "a", "அ");
  });

  test("Neg_Fun_007 - Place name preservation", async ({ page }, testInfo) => {
      await runNegativeTest(
        page,
        testInfo,
        "naan Colombo la irukken",
        "நான் Colombo ல இருக்கேன்"
      );
    });

  test("Neg_Fun_008 - Mixed English + Tamil sentence", async ({
      page,
    }, testInfo) => {
      await runNegativeTest(
        page,
        testInfo,
        "naan indaiku class ku pokela",
        "நான் இண்டைக்கு class கு போகேல"
      );
    });

  test("Neg_Fun_009 - Non-Tamil romanization", async ({ page }, testInfo) => {
    await runNegativeTest(page, testInfo, "namaste", "நமஸ்தே");
  });

  test("Neg_Fun_010 - Random gibberish input", async ({ page }, testInfo) => {
    await runNegativeTest(page, testInfo, "xyz", "அ");
  });
});
