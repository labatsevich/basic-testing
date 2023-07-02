// Uncomment the code below and write your tests
import path, { join } from 'path';
import fs from 'fs';
import { doStuffByTimeout, doStuffByInterval, readFileAsynchronously } from '.';

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
    const spy = jest.spyOn(path, 'join');
    const filePath = './for_test.txt';
    await readFileAsynchronously(filePath);
    expect(spy).toBeCalled();
    expect(join).toBeCalledWith(__dirname, filePath);
  });

  test('should return null if file does not exist', async () => {
    jest.spyOn(fs, 'existsSync').mockImplementation(() => false);
    const __filePath = './for_test.txt';
    await expect(readFileAsynchronously(__filePath)).resolves.toBeNull();
  });

  test('should return file content if file exists', async () => {
    const text = 'some text';
    const __filePath = './__fixtures__/for_test.txt';
    await expect(readFileAsynchronously(__filePath)).resolves.toEqual(text);
  });
});
