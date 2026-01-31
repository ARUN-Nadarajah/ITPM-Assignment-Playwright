# Tamil Transliteration Test Suite

Automated end-to-end test suite for validating Tamil transliteration conversion on the Changathi Tamil translator web application.

## 📋 Project Overview

This project is a Playwright-based automated test suite that validates the functionality of the **Changathi Tamil Translator** (https://tamil.changathi.com). It tests the conversion of English transliterated Tamil text (Romanized Tamil) into actual Tamil script.

### Key Features
- **13 Comprehensive Test Cases**: Tests various Tamil words and sentences
- **Custom Markdown Reporter**: Generates detailed test execution reports in Markdown format
- **Test Retry Logic**: Automatic retry on test failure with configurable attempts
- **HTML Report Generation**: Playwright HTML reporter for detailed test analytics
- **Character-by-Character Input**: Simulates realistic user typing behavior with delays
- **Test Data Attachments**: Captures input, output, and expected values for each test

## 🗂️ Project Structure

```
.
├── tests/
│   └── sample.spec.js           # Main test file with all test cases
├── playwright.config.js         # Playwright configuration
├── custom-reporter.js           # Custom Markdown reporter implementation
├── package.json                 # Project dependencies and scripts
├── test-report.md              # Generated test report (created after test run)
├── playwright-report/          # Generated HTML reports
│   └── index.html
└── test-results/               # Test result data and artifacts
    └── [test-result folders]
```

## 🛠️ Tech Stack

- **Playwright**: v1.58.0 - Modern end-to-end testing framework
- **Node.js**: JavaScript runtime
- **CommonJS**: Module system

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Verify Installation**
   ```bash
   npx playwright --version
   ```

## 🚀 Running Tests

### Run All Tests
```bash
npm test
```
Or directly:
```bash
npx playwright test
```

### Run Tests in Watch Mode (Interactive UI)
```bash
npm run test:watch
```
This opens the Playwright Test UI for interactive test execution and debugging.

### Debug Tests
```bash
npm run test:debug
```
This runs tests in debug mode with step-through debugging capabilities.

### Run Specific Test
```bash
npx playwright test tests/sample.spec.js --grep "vanakkam"
```

## 📊 Test Cases

The test suite includes 13 test cases validating:

| Test ID | Input (Romanized Tamil) | Expected Output (Tamil Script) |
|---------|-------------------------|--------------------------------|
| Pos_Fun_0001 | vanakkam (multi-word) | வணக்கம் & related text |
| Pos_Fun_0002 | naan (dispute story) | நான் & related text |
| Pos_Fun_0003 | nee (personal story) | நீ & related text |
| Pos_Fun_0004 | eppadi (temple story) | எப்படி & related text |
| Pos_Fun_0005 | enakku | எனக்கு |
| Pos_Fun_0006 | irukken | இருக்கேன் |
| Pos_Fun_0007 | poganum | போகணும் |
| Pos_Fun_0008 | varen | வரேன் |
| Pos_Fun_0009 | poren | போறேன் |
| Pos_Fun_0010 | sapten | சாப்பிட்டேன் |
| Pos_Fun_0011 | sapadu | சாப்பாடு |
| Pos_Fun_0012 | romba | ரொம்ப |
| Pos_Fun_0013 | nalla | நல்ல |

## ⚙️ Configuration

### Playwright Configuration (`playwright.config.js`)

```javascript
- Test Directory: ./tests
- Timeout: 60 seconds per test
- Retries: 1 automatic retry on failure
- Headless Mode: Disabled (browser visible during test)
- Viewport Size: 1280x720 pixels
- Action Timeout: 30 seconds
```

### Reporters
- **HTML Reporter**: Generates visual reports in `playwright-report/`
- **Custom Markdown Reporter**: Generates summary reports in `test-report.md`

## 📝 Test Implementation Details

### How Tests Work

Each test case:
1. Navigates to https://tamil.changathi.com
2. Locates the input textarea/text field
3. Clears any existing content
4. Types the romanized Tamil text character-by-character with 75ms delay between characters
5. Presses Space to trigger conversion
6. Waits for conversion with up to 8 retry attempts (800ms each)
7. Verifies the output contains the expected Tamil script text
8. Attaches test data (input, output, expected) to the test report

### Key Testing Features

- **Retry Logic**: Tests can retry up to 1 time if they fail
- **Wait Mechanism**: Implements polling with configurable delays for dynamic content
- **Test Attachments**: Automatically captures and stores test data for each execution
- **Error Handling**: Gracefully handles and reports test failures with detailed error messages

## 📈 Test Reports

### HTML Report
After running tests, view the interactive HTML report:
```bash
npx playwright show-report
```

Or open `playwright-report/index.html` in a web browser.

### Markdown Report
A `test-report.md` file is automatically generated containing:
- Total tests executed
- Pass/fail count
- Individual test results with:
  - Status (✅ Passed / ❌ Failed)
  - Duration in milliseconds
  - Input and expected output
  - Error messages (if failed)

## 🐛 Troubleshooting

### Tests Timeout
- Increase `timeout` in `playwright.config.js`
- Check internet connectivity to tamil.changathi.com
- Verify the website UI elements haven't changed

### Tests Fail with "Element Not Found"
- The website HTML structure may have changed
- Update CSS selectors in the `runTest()` function:
  ```javascript
  const inputBox = page.locator('textarea, input[type="text"]').first();
  ```

### Slow Test Execution
- Adjust the character typing delay (currently 75ms)
- Reduce wait/retry attempts (currently 8 attempts × 800ms each)

## 📂 Generated Files

After running tests, the following directories are created:

- **`playwright-report/`**: Contains HTML test reports
- **`test-results/`**: Contains detailed test results and artifacts for each test execution
- **`test-report.md`**: Markdown summary of test execution

## 🔧 Development

### Modifying Tests
Edit `tests/sample.spec.js` to add or modify test cases.

### Custom Reporter
The `custom-reporter.js` file implements a custom Playwright reporter that generates Markdown reports. Modify this file to change report format or behavior.

### Adding New Tests
```javascript
test('Test Name', async ({ page }, testInfo) => {
  await runTest(page, testInfo, 'input_text', 'expected_output');
});
```

## 📄 License

ISC License

## 👤 Author

IT23581652

## 📞 Support

For issues or questions about the test suite, check:
1. Playwright documentation: https://playwright.dev
2. Tamil.changathi.com website status
3. Browser compatibility (tests use headless: false for visibility)

---

**Project Created:** January 2026  
**Last Updated:** January 2026