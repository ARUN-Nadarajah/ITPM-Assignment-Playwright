# Tamil Transliteration Test Report

**Generated:** 2026-01-31T12:07:43.427Z

## Summary

| Metric | Value |
|--------|-------|
| Total Tests | 34 |
| ✅ Passed | 24 |
| ❌ Failed | 10 |
| ⏭️ Skipped | 0 |
| Total Duration | 50.07s |

## Positive Test Cases

| # | Test Name | Status | Duration |
|---|-----------|--------|----------|
| 1 | Pos_Fun_0001 - Simple greeting sentence | ✅ passed | 4302ms |
| 2 | Pos_Fun_0003 - Interrogative question form | ✅ passed | 4808ms |
| 3 | Pos_Fun_0004 - Imperative command sentence | ✅ passed | 5058ms |
| 4 | Pos_Fun_0002 - Simple present tense sentence | ✅ passed | 5240ms |
| 5 | Pos_Fun_0008 - Polite request sentence | ✅ passed | 4054ms |
| 6 | Pos_Fun_0005 - Past tense sentence | ✅ passed | 5175ms |
| 7 | Pos_Fun_0007 - Negative sentence form | ✅ passed | 4601ms |
| 8 | Pos_Fun_0006 - Future tense sentence | ✅ passed | 5341ms |
| 9 | Pos_Fun_0010 - Compound sentence | ✅ passed | 4745ms |
| 10 | Pos_Fun_0011 - Complex conditional sentence | ✅ passed | 5434ms |
| 11 | Pos_Fun_0009 - Informal slang sentence | ✅ passed | 5815ms |
| 12 | Pos_Fun_0012 - Inputs containing punctuation marks | ✅ passed | 5902ms |
| 13 | Pos_Fun_0013 - Special characters only | ✅ passed | 3708ms |
| 14 | Pos_Fun_0015 - Uppercase letters input | ✅ passed | 3706ms |
| 15 | Pos_Fun_0014 - Empty string input | ✅ passed | 4310ms |
| 16 | Pos_Fun_0016 - Repeated word emphasis | ✅ passed | 3867ms |
| 17 | Pos_Fun_0017 - Multiple spaces formatting | ✅ passed | 4284ms |
| 18 | Pos_Fun_0018 - request with punctuation | ✅ passed | 4716ms |
| 19 | Pos_Fun_0019 - Numerical input | ✅ passed | 4789ms |
| 20 | Pos_Fun_0020 - Plural pronoun usage | ✅ passed | 4937ms |
| 21 | Pos_Fun_0021 - Question with punctuation | ✅ passed | 4541ms |
| 22 | Pos_Fun_0022 - Polite request with punctuation | ✅ passed | 4803ms |
| 23 | Pos_Fun_0023 - Medium paragraph input | ✅ passed | 7012ms |
| 24 | Pos_Fun_0024 - Long input paragraph | ✅ passed | 13095ms |

## Negative Test Cases

| # | Test Name | Status | Duration |
|---|-----------|--------|----------|
| 1 | Neg_Fun_001 - Time format handling | ❌ failed | 5859ms |
| 2 | Neg_Fun_002 - Line break input | ❌ failed | 5778ms |
| 3 | Neg_Fun_003 - Numbers and currency handling | ❌ failed | 5992ms |
| 4 | Neg_Fun_004 - Joined word robustness | ❌ failed | 4934ms |
| 5 | Neg_Fun_005 - Units of measurement | ❌ failed | 6337ms |
| 6 | Neg_Fun_006 - Single character input | ❌ failed | 5536ms |
| 7 | Neg_Fun_007 - Place name preservation | ❌ failed | 6296ms |
| 8 | Neg_Fun_008 - Mixed English + Tamil sentence | ❌ failed | 5575ms |
| 9 | Neg_Fun_009 - Non-Tamil romanization | ❌ failed | 4596ms |
| 10 | Neg_Fun_010 - Random gibberish input | ❌ failed | 4789ms |

## UI Test Cases

| # | Test Name | Status | Duration |
|---|-----------|--------|----------|

## Failed Tests Details

### 1. Neg_Fun_001 - Time format handling

- **Status:** ❌ Failed
- **Duration:** 5859ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"7.30 AM கு கிளம்பு"[39m
Received string:    [31m"௭.௩௦ அம கு கெளம்பு "[39m

### 2. Neg_Fun_002 - Line break input

- **Status:** ❌ Failed
- **Duration:** 5778ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"நான் வீட்டுக்கு போறேன்[39m
[32mநீ வருவியா"[39m
Received string:    [31m"நான் வீட்டுக்கு போறேன்[39m
[31mநீ வருவிய "[39m

### 3. Neg_Fun_003 - Numbers and currency handling

- **Status:** ❌ Failed
- **Duration:** 5992ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"நான் Rs. 2500 குடுத்தேன்"[39m
Received string:    [31m"நான் ரஸ். ௨௫௦௦ குடுத்தேன் "[39m

### 4. Neg_Fun_004 - Joined word robustness

- **Status:** ❌ Failed
- **Duration:** 4934ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"நான் வீட்டுக்கு போறேன்"[39m
Received string:    [31m"நான்வீட்டுக்குப்போறேன் "[39m

### 5. Neg_Fun_005 - Units of measurement

- **Status:** ❌ Failed
- **Duration:** 6337ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"அவன் 10kg கேக் வாங்கினான் "[39m
Received string:    [31m"அவன் ௧௦க்க் கேக் வாங்கினான் "[39m

### 6. Neg_Fun_006 - Single character input

- **Status:** ❌ Failed
- **Duration:** 5536ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"அ"[39m
Received string:    [31m"எ "[39m

### 7. Neg_Fun_007 - Place name preservation

- **Status:** ❌ Failed
- **Duration:** 6296ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"நான் Colombo ல இருக்கேன்"[39m
Received string:    [31m"நான் கொலோம்போ ல இருக்கேன் "[39m

### 8. Neg_Fun_008 - Mixed English + Tamil sentence

- **Status:** ❌ Failed
- **Duration:** 5575ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"நான் இண்டைக்கு class கு போகேல"[39m
Received string:    [31m"நான் இண்டைக்கு கிளாஸ் கு போகேல "[39m

### 9. Neg_Fun_009 - Non-Tamil romanization

- **Status:** ❌ Failed
- **Duration:** 4596ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"நமஸ்தே"[39m
Received string:    [31m"நமஸ்ட் "[39m

### 10. Neg_Fun_010 - Random gibberish input

- **Status:** ❌ Failed
- **Duration:** 4789ms
- **Error:** Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"xyz"[39m
Received string:    [31m"ஸ்ய்ஸ் "[39m


---
*Report generated by Custom Markdown Reporter*
