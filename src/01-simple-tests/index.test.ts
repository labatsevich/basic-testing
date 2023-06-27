// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 7, action: Action.Add });
    expect(result).toBe(9);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 5, b: 4, action: Action.Subtract });
    expect(result).toBe(1);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 15, b: 15, action: Action.Multiply });
    expect(result).toBe(225);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 81, b: 9, action: Action.Divide });
    expect(result).toBe(9);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 4,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toBe(64);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 5, b: 4, action: undefined });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: 5, b: { b: 2 }, action: Action.Add });
    expect(result).toBeNull();
  });
});
