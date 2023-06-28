// Uncomment the code below and write your tests
import { InsufficientFundsError, TransferFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalance = 200;
    expect(getBankAccount(initialBalance).getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(200);
    expect(() => account.withdraw(500)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(200);
    const account2 = getBankAccount(100);
    expect(() => account.transfer(1000, account2)).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(200);
    expect(() => account.transfer(50, account)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const account = getBankAccount(200);
    const balance = account.deposit(100).getBalance();
    expect(account.getBalance()).toEqual(balance);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(200);
    const balance = account.withdraw(100).getBalance();
    expect(account.getBalance()).toEqual(balance);
  });

  test('should transfer money', () => {
    const account = getBankAccount(150);
    const account2 = getBankAccount(300);
    expect(() => {
      account.transfer(100, account2);
    }).not.toThrow();
    expect(account.getBalance()).toEqual(50);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
