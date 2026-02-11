import { describe, it, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

describe("calculateAverage", () => {
  it("normal case - valid numbers", () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });

  it("single number array", () => {
    expect(calculateAverage([5])).toBe(5);
  });

  it("empty array → null", () => {
    expect(calculateAverage([])).toBeNull();
  });

  it("non-array input → null", () => {
    expect(calculateAverage("123")).toBeNull();
    expect(calculateAverage(null)).toBeNull();
  });

  it("array with non-number → null", () => {
    expect(calculateAverage([1, 2, "3"])).toBeNull();  
  });
});
