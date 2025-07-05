# 📐 String Calculator - TDD Kata

This is my implementation of the **String Calculator** using **Test-Driven Development (TDD)** in JavaScript. I built this as part of my placement practice — solving the problem step-by-step with proper test cases and code refactoring after each step.


## 💡 Working

The `add()` function takes a string of numbers (separated by custom delimiters) and returns their sum. I handled different edge cases like empty strings, newlines, custom/multi delimiters, negative numbers, and ignoring large values.


## 🧪 Test Cases I Covered

| Case | Description |
|------|-------------|
| ✅ Empty string | Returns `0` |
| ✅ Single number | Returns the number itself |
| ✅ Two or more numbers | Returns their sum (comma-separated) |
| ✅ Newline as delimiter | `"1\n2,3"` → `6` |
| ✅ Custom delimiter | `"//;\n1;2"` → `3` |
| ✅ Negative numbers | Throws error with message like `"negative numbers not allowed: -2, -3"` |
| ✅ Ignore >1000 | `"2,1001"` → `2` |
| ✅ Delimiter of any length | `"//[***]\n1***2***3"` → `6` |
| ✅ Multiple delimiters | `"//[*][%]\n1*2%3"` → `6` |
| ✅ Multi-char multiple delimiters | `"//[***][%%]\n1***2%%3"` → `6` |


## 🛠 Technologies Used

- JavaScript
- Jest (for testing)
- VS Code
## ✅ Jest
Jest is a powerful JavaScript testing framework maintained by Facebook. I used it in this project to write and run test cases using the TDD (Test-Driven Development) approach.
</br>
Jest helped me:
- Check if the logic is correct
- Get fast feedback with clean test reports
- Handle test cases easily using simple functions like describe, test, and expect

## 📂 Folder Structure

      
      STRING CALCULATOR TDD/
      ├── node_modules/
      ├── src/
      │   ├── stringCalculator.js
      │   └── test/
      │       └── stringCalculator.test.js
      ├── package.json
      ├── package-lock.json
      └── README.md



## 🧠 How I approached this

I followed proper TDD steps:

1. **Wrote a test first** (failing test)
2. **Wrote minimum code** to pass the test
3. **Refactored the code**
4. Repeated for every requirement in the kata

This helped me stay focused and catch edge cases easily.

## ▶️ How to run

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/String-Calculator-TDD.git
   cd string-calculator-tdd
2. Initialize npm (if not already)
   ```bash
   npm init -y
3. Install Jest
   ```bash
   npm install --save-dev jest
4. Update package.json Scripts
   ``` bash
   "scripts": {
      "test": "jest"
    }
5. Run the Tests
    ```bash
    npm test
    
## ❌ Output when an error occurs
      
      const input5 = "1\n2,3";
      it(`handle new line as separator: input = "${input5.replace('\n', '\\n')}"`,()=>{
         expect(add(input5)).toBe(7);
      });
Here’s a screenshot of the test result:
<p align="center">
  <img src="https://github.com/user-attachments/assets/4751448a-e47e-4e36-aeb2-585576ac59e7" width="600"/>

</p>

## ✅ Output when an error doesn't occur
      const input5 = "1\n2,3";
      it(`handle new line as separator: input = "${input5.replace('\n', '\\n')}"`,()=>{
         expect(add(input5)).toBe(6);
      });
Here’s a screenshot of the test result:
<p align="center">
  <img src="https://github.com/user-attachments/assets/01f74d67-616d-4458-9b06-d05d1e581244" width="600"/>
</p>

## 🔗 Connect With Me
- Email : [talaviyakruti11@gmail.com](mailto:talaviyakruti11@gmail.com)

