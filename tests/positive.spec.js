// @ts-check
const { test, expect } = require("@playwright/test");

/**
 * Tamil Transliteration - Positive Test Cases
 * Tests valid transliteration scenarios
 *
 * Total: 24 Positive Test Cases
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
 * Runs a positive transliteration test
 * @param {import('@playwright/test').Page} page
 * @param {import('@playwright/test').TestInfo} testInfo
 * @param {string} input - Romanized Tamil input
 * @param {string} expected - Expected Tamil script output
 */
async function runPositiveTest(page, testInfo, input, expected) {
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
// POSITIVE TEST CASES (24 Tests)
// ============================================

test.describe("Positive Test Cases - Tamil Transliteration", () => {
  test("Pos_Fun_0001 - Simple greeting sentence", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "iniya kaalai vanthanam",
      "இனிய காலை வந்தனம்"
    );
  });

  test("Pos_Fun_0002 - Simple present tense sentence", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "naan marakkari vettukiren",
      "நான் மரக்கறி வெட்டுகிறேன்"
    );
  });

  test("Pos_Fun_0003 - Interrogative question form", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "yaar intha thevathai?",
      "யார் இந்த தேவதை?"
    );
  });

  test("Pos_Fun_0004 - Imperative command sentence", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "antha kannadiyai eduthuttu inga vaa seekiram",
      "அந்த கண்ணாடியை எடுத்துட்டு இங்க வா சீக்கிரம்"
    );
  });

  test("Pos_Fun_0005 - Past tense sentence", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "avan siru vayathil kaathal seithaan",
      "அவன் சிறு வயதில் காதல் செய்தான்"
    );
  });

  test("Pos_Fun_0006 - Future tense sentence", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "kenuja padippu mudiya thirumanam seivaal",
      "கேனுஜா படிப்பு முடிய திருமணம் செய்வாள்"
    );
  });

  test("Pos_Fun_0007 - Negative sentence form", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "naa innum saapidala",
      "நா இன்னும் சாப்பிடல "
    );
  });

  test("Pos_Fun_0008 - Polite request sentence", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "konjam help pannunga",
      "கொஞ்சம் ஹெல்ப் பண்ணுங்க"
    );
  });

  test("Pos_Fun_0009 - Informal slang sentence", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "vanakkam daa maapila theni la irunthu",
      "வணக்கம் டா மாப்பிள தேனீ ல இருந்து"
    );
  });

  test("Pos_Fun_0010 - Compound sentence", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "mazhai peiyuthu aana naan veliya poren",
      "மழை பெய்யுது ஆனா நான் வெளிய போறேன்"
    );
  });

  test("Pos_Fun_0011 - Complex conditional sentence", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "avan vilaiyaada vanthaa thaan naan varuven",
      "அவன் விளையாட வந்தா தான் நான் வருவேன் "
    );
  });

  test("Pos_Fun_0012 - Inputs containing punctuation marks", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "aiyaa! avan inga varuvaan pola",
      "ஐயா! அவன் இங்க வருவான் போல "
    );
  });

  test("Pos_Fun_0013 - Special characters only", async ({ page }, testInfo) => {
    await runPositiveTest(page, testInfo, "#$%^&*", "#$%^&*");
  });

  test("Pos_Fun_0014 - Empty string input", async ({ page }, testInfo) => {
    await runPositiveTest(page, testInfo, " ", " ");
  });

  test("Pos_Fun_0015 - Uppercase letters input", async ({ page }, testInfo) => {
    await runPositiveTest(page, testInfo, "VANAKKAM", "வணக்கம்");
  });

  test("Pos_Fun_0016 - Repeated word emphasis", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "seekiram seekiram vaa",
      "சீக்கிரம் சீக்கிரம் வா"
    );
  });

  test("Pos_Fun_0017 - Multiple spaces formatting", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "naan    veetukku    poren",
      "நான்    வீட்டுக்கு    போறேன்"
    );
  });

  test("Pos_Fun_0018 - request with punctuation", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "adei naalaiku vaara neram atha kondu varuviyaa?",
      "அடேய் நாளைக்கு வார நேரம் அத கொண்டு வருவியா?"
    );
  });

  test("Pos_Fun_0019 - Numerical input", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "om daa machan varum poothu kondu vaaran",
      "ஓம் டா மச்சான் வரும் போது கொண்டு வாறன்"
    );
  });

  test("Pos_Fun_0020 - Plural pronoun usage", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "naanga cinema porom",
      "நாங்க சினிமா போறோம்"
    );
  });

  test("Pos_Fun_0021 - Question with punctuation", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "ne nethu enna seithutu iruntha?",
      "நீ நேத்து என்ன செய்துட்டு இருந்த?"
    );
  });

  test("Pos_Fun_0022 - Polite request with punctuation", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "konja neram irukka mudiyuma? naan varuven",
      "கொஞ்ச நேரம் இருக்க முடியுமா? நான் வருவேன்"
    );
  });

  test("Pos_Fun_0023 - Medium paragraph input", async ({ page }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "indaiku anga romba velai irunthichu aana avan ellam midincha appuram thaan vanthu enna velai endu kettaan",
      "இண்டைக்கு அங்க ரொம்ப வேலை இருந்திச்சு ஆனா அவன் எல்லாம் முடிஞ்ச அப்புறம் தான் வந்து என்ன வேலை எண்டு கேட்டான் "
    );
  });

  test("Pos_Fun_0024 - Long input paragraph", async ({
    page,
  }, testInfo) => {
    await runPositiveTest(
      page,
      testInfo,
      "avan indaiku kaalaila seekiram elumbi velaikku poka irunthaan aana amma vanthu saappitutu po endu sonnanga naan illa enakku neram aakitu naan pokanum endu solliyum avanga enna vidala athaala thaan naan avangalukku theriyaama romba amaithiya kilampitten",
      "அவன் இண்டைக்கு காலைல சீக்கிரம் எழும்பி வேலைக்கு போக இருந்தான் ஆனா அம்மா வந்து சாப்பிட்டுட்டு போ எண்டு சொன்னாங்க நான் இல்ல எனக்கு நேரம் ஆகிட்டு நான் போகணும் எண்டு சொல்லியும் அவங்க என்ன விடல அதால தான் நான் அவங்களுக்கு தெரியாம ரொம்ப அமைதியா கிளம்பிட்டேன் "
    );
  });
});
