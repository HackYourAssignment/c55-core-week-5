import { test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

test("returns the average of numbers in an array", () => {
  const numbers = [2, 4, 6];

  const result = calculateAverage(numbers);

  expect(result).toBe(4);
});

test("returns the single element when array has one number", () => {
  const numbers = [5];

  const result = calculateAverage(numbers);

  expect(result).toBe(5);
});

test("returns null for empty array", () => {
  const numbers = [];

  const result = calculateAverage(numbers);

  expect(result).toBe(null);
});

test("returns null for non-array input", () => {
  const numbers = "123";

  const result = calculateAverage(numbers);

  expect(result).toBe(null);
});

test("returns null when the array contains a non-number value", () => {
  const numbers = [1, 2, "3"];

  const result = calculateAverage(numbers);

  expect(result).toBe(null);
});

test("returns the average for array with negative numbers", () => {
  const numbers = [-2, -4, -6];

  const result = calculateAverage(numbers);

  expect(result).toBe(-4);
});

test("returns the average for array with floating point numbers", () => {
  const numbers = [3.2, 1.2, 5.3];

  const result = calculateAverage(numbers);

  expect(result).toBe(3.233333333333333);
});
