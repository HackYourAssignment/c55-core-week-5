import { describe, it, expect } from "vitest";
import { calculateAverage } from "./calculateAverage";

describe("calculateAverage", () => {
  it("returns average for valid numbers", () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });

  it("returns number for single value", () => {
    expect(calculateAverage([5])).toBe(5);
  });

  it("returns null for empty array", () => {
    expect(calculateAverage([])).toBe(null);
  });

  it("returns null if input is not array", () => {
    expect(calculateAverage("123")).toBe(null);
  });

  it("returns null if array contains non-number", () => {
    expect(calculateAverage([1, 2, "3"])).toBe(null);
  });

  it("works with decimal numbers", () => {
    expect(calculateAverage([1.5, 2.5])).toBe(2);
  });
});