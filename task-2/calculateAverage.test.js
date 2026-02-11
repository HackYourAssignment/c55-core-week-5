import { test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

test("calculates average of numbers", () => {
  expect(calculateAverage([2, 4, 6])).toBe(4);
});

test("An array with a single number should return that number as the average", () => {
  expect(calculateAverage([5])).toBe(5);
});

test("An empty array should return null",()=>{
    expect(calculateAverage([])).toBeNull();
});

test("A non-array input should return null",()=>{
    expect(calculateAverage("123")).toBeNull();
});
test("An array containing a non-number value should return null",()=>{
    expect(calculateAverage([1, 2, "3"])).toBeNull()
});