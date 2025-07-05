
const { add } = require('./stringCalculator');

describe('add',()=>{

  it('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  it('return number it self if one number is given',()=>{
    expect(add("1")).toBe(1);
  });

  it('returns sum of two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
  });
  
  it('return sum of any comma-seprated numbers',()=>{
    expect(add("1,2,3")).toBe(6);
  });
  
  it('handle new line as separator',()=>{
     expect(add("1\n2,3")).toBe(6);
  });

  it('custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
  });
})


