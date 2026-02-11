import { test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

test("should calculate the average of an array of numbers", () => {
  expect(calculateAverage([2, 4, 6])).toBe(4);
});

test("should return null if the input is not an array", () => {
  expect(calculateAverage("123")).toBeNull();
});

test("should return null if the array is empty", () => {
  expect(calculateAverage([])).toBeNull();
});

test("should return null if any element in the array is not a number", () => {
  expect(calculateAverage([1, 2, "3"])).toBeNull();
});

test("should return a single number if the array has only one element", () => {
  expect(calculateAverage([5])).toBe(5);
});
