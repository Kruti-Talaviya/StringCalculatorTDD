
const { add } = require('./stringCalculator');

describe('add',()=>{
  it('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });
  it('return number it self if one number is given',()=>{
    expect(add("1")).toBe(1);
  })
  
})


