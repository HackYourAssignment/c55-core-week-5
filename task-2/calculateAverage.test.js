import { test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

// Test cases for calculateAverage function
test("calculates average of a list of numbers", () => {
  expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
});

test("calculates average with single number", () => {
  expect(calculateAverage([5])).toBe(5);
});

test("returns null for an empty array", () => {
  expect(calculateAverage([])).toBeNull();
});

test("returns null for non-array input", () => {
  expect(calculateAverage("rise and shine")).toBeNull();
});

test("returns null if any element in the array is not a number", () => {
  expect(calculateAverage([1, 2, "three", 4])).toBeNull();
});
