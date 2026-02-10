import { test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

/*

- Returns the average of numbers in an array
- Returns `null` if:
    - the input is not an array
    - the array is empty
    - the array contains a non-number value
    */

test("returns the average of numbers in an array", () => {
  const numbers = [2, 4, 6];
  const result = calculateAverage(numbers);

  expect(result).toBe(4);
});

test("An array with a single number", () => {
  const numbers = [2];
  const result = calculateAverage(numbers);

  expect(result).toBe(2);
});

test("Returns `null` if the input is not an array", () => {
  const numbers = "2";
  const result = calculateAverage(numbers);

  expect(result).toBe(null);
});

test("Returns `null` if the array is empty", () => {
  const numbers = [];
  const result = calculateAverage(numbers);

  expect(result).toBe(null);
});

test("Returns `null` if  the array contains a non-number value", () => {
  const numbers = ["apple"];
  const result = calculateAverage(numbers);

  expect(result).toBe(null);
});
