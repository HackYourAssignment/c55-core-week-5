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