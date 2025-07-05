const { add } = require('../stringCalculator');

// we are using describe , that use to group multiple test cases of same type or function
describe('add',()=>{

  const input1 = "";
  it(`returns 0 for empty string: input = "${input1}"`, () => {
    expect(add(input1)).toBe(0);
  });

  const input2 = "1";
  it(`return number it self if one number is given: input = "${input2}"`,()=>{
    expect(add(input2)).toBe(1);
  });

  const input3 = "1,2";
  it(`returns sum of two comma-separated numbers: input = "${input3}"`, () => {
    expect(add(input3)).toBe(3);
  });
  
  const input4 = "1,2,3";
  it(`return sum of any comma-seprated numbers: input = "${input4}"`,()=>{
    expect(add(input4)).toBe(6);
  });
  
  const input5 = "1\n2,3";
  it(`handle new line as separator: input = "${input5.replace('\n', '\\n')}"`,()=>{
     expect(add(input5)).toBe(6);
  });

  const input6 = "//;\n1;2";
  it(`custom delimiter: input = "${input6.replace('\n', '\\n')}"`, () => {
    expect(add(input6)).toBe(3);
  });

  // we can use test() also insted of it()
  const input7 = "1,-2,-3";
  test(`throws error for negative numbers: input = "${input7}"`, () => {
    expect(() => add(input7)).toThrow("negative numbers not allowed: -2, -3");
  });

  const input8 = "2,1001";
  test(`ignores numbers > 1000: input = "${input8}"`, () => {
    expect(add(input8)).toBe(2);
  });

  const input9 = "//[***]\n1***2***3";
  test(`supports delimiters of any length: input = "${input9.replace('\n', '\\n')}"`, () => {
    expect(add(input9)).toBe(6);
  });

  const input10 = "//[*][%]\n1*2%3";
  test(`supports multiple delimiters: input = "${input10.replace('\n', '\\n')}"`, () => {
    expect(add(input10)).toBe(6);
  });

  const input11 = "//[***][%%]\n1***2%%3";
  test(`supports multi-character multiple delimiters: input = "${input11.replace('\n', '\\n')}"`, () => {
    expect(add(input11)).toBe(6);
  });

});
