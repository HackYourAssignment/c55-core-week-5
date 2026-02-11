import { test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

test("calculateAverage function with array [2, 4, 6] should return 4", () => {
  expect(calculateAverage([2, 4, 6])).toBe(4);
});

test("array with a single number 5 should return 5", () => {
  expect(calculateAverage([5])).toBe(5);
});

test("empty array [] should return null", () => {
  expect(calculateAverage([])).toBe(null);
});

test("non-array input '123' should return null", () => {
  expect(calculateAverage(['123'])).toBe(null);
});

test("An array containing a non-number value [1, 2, '3'] should return null", () => {
  expect(calculateAverage([1, 2, '3'])).toBe(null);
});