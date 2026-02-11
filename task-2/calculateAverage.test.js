import { describe, it, expect } from "vitest";
import { calculateAverage } from "./calculateAverage";

// A normal case with valid numbers
describe("calculateAverage - valid numbers", () => {
  it("should return the average of multiple numbers", () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });
});

// An array with a single number
describe("calculateAverage - single number", () => {
  it("should return the number itself if array has one element", () => {
    expect(calculateAverage([5])).toBe(5);
  });
});

// An empty array
describe("calculateAverage - empty array", () => {
  it("should return null for an empty array", () => {
    expect(calculateAverage([])).toBeNull();
  });
});

// A non-array input
describe("calculateAverage - non-array input", () => {
  it("should return null for a string input", () => {
    expect(calculateAverage("123")).toBeNull();
  });

  it("should return null for null input", () => {
    expect(calculateAverage(null)).toBeNull();
  });
});

// An array containing a non-number value
describe("calculateAverage - array contains non-number", () => {
  it("should return null if array contains a string", () => {
    expect(calculateAverage([1, 2, "3"])).toBeNull();
  });

  it("should return null if array contains undefined", () => {
    expect(calculateAverage([1, 2, undefined])).toBeNull();
  });
});
