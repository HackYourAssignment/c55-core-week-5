import { describe, test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage";

describe('calculateAverage checks', () => {

  test('normal numbers → should give 4 for [2, 4, 6]', () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });
