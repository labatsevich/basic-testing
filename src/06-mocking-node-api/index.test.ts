// Uncomment the code below and write your tests
import { doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const cb = jest.fn();
    const spyTimeout = jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(cb, 100);
    expect(spyTimeout).toHaveBeenCalledTimes(1);
    expect(spyTimeout).toHaveBeenLastCalledWith(cb, 100);
  });

  test('should call callback only after timeout', () => {
    const cb = jest.fn();
    const spyTimeout = jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(cb, 100);
    expect(cb).not.toBeCalled();
    jest.runOnlyPendingTimers();
    expect(spyTimeout).toBeCalled();
    expect(spyTimeout).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const cb = jest.fn();
    const spyInterval = jest.spyOn(global, 'setInterval');
    doStuffByInterval(cb, 1000);
    expect(spyInterval).toBeCalled();
    expect(spyInterval).toHaveBeenLastCalledWith(cb, 1000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const cb = jest.fn();
    doStuffByInterval(cb, 1000);
    expect(cb).not.toBeCalled();
    jest.advanceTimersByTime(10000);
    expect(cb).toBeCalled();
    expect(cb).toBeCalledTimes(10);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
