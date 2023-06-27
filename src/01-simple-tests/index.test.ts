// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const a = 9;
  const b = 6;
  test('should add two numbers', () => {
    const result = a + b;
    expect(simpleCalculator({ a, b, action: Action.Add })).toBe(result);
  });

  test('should subtract two numbers', () => {
    const result = a - b;
    expect(simpleCalculator({ a, b, action: Action.Subtract })).toBe(result);
  });

  test('should multiply two numbers', () => {
    const result = a * b;
    expect(simpleCalculator({ a, b, action: Action.Multiply })).toBe(result);
  });

  test('should divide two numbers', () => {
    const result = a / b;
    expect(simpleCalculator({ a, b, action: Action.Divide })).toBe(result);
  });

  test('should exponentiate two numbers', () => {
    const result = Math.pow(a, b);
    expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(
      result,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 5, b: 4, action: 'bla' })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a, b: { b: 2 }, action: Action.Add })).toBe(null);
  });
});
