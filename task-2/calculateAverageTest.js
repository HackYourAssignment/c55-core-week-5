import { describe, test, expect } from 'vitest';
import { calculateAverage } from './calculateAverage';

describe('calculateAverage checks', () => {

  test('normal numbers → should give 4 for [2, 4, 6]', () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });

  test('one number → should give back the same number', () => {
    expect(calculateAverage([5])).toBe(5);
    expect(calculateAverage([0])).toBe(0);
  });

    test('empty list → should give null', () => {
    expect(calculateAverage([])).toBe(null);
  });

   test('not a list at all → should give null', () => {
    expect(calculateAverage(null)).toBe(null);
    expect(calculateAverage("hello")).toBe(null);
    expect(calculateAverage(100)).toBe(null);
  });

  test('list with non number value → should give null', () => {
    expect(calculateAverage([1, 2, "hello"])).toBe(null);
    expect(calculateAverage([1, true, 3])).toBe(null);
  });

});