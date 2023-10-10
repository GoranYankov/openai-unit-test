const math = require('../src/math'); 

describe('Math Functions', () => {
  test('sum() should return the sum of two numbers', () => {
    const result = math.sum(2, 3);
    expect(result).toBe(5);
  });

  test('subtraction() should return the subtraction of two numbers', () => {
    const result = math.subtraction(5, 2);
    expect(result).toBe(3);
  });

  test('division() should return the division of two numbers', () => {
    const result = math.division(10, 2);
    expect(result).toBe(5);
  });

  test('division() should throw an error if the second number is 0', () => {
    expect(() => {
      math.division(10, 0);
    }).toThrow('division of null.');
  });

  test('multiply() should return the multiplication of two numbers', () => {
    const result = math.multiply(4, 2);
    expect(result).toBe(8);
  });

  test('goran() should concatenate two strings', () => {
    const result = math.goran('Hello', 'World');
    expect(result).toBe('Hello World');
  });
});