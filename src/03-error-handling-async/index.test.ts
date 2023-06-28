// Uncomment the code below and write your tests
import {
  throwError,
  resolveValue,
  throwCustomError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    expect(resolveValue(123)).resolves.toBe(123);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const message = 'Something went wrong!';
    expect(() => throwError(message)).toThrow(message);
  });

  test('should throw error with default message if message is not provided', () => {
    const messageDefault = 'Oops!';
    expect(throwError).toThrow(messageDefault);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const message = 'This is my awesome custom error!';
    expect(throwCustomError).toThrow(message);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    const message = 'This is my awesome custom error!';
    expect(rejectCustomError).rejects.toThrow(message);
  });
});
