import { describe, test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js"; 
describe("calculateAverage", () => {
  test("returns average for a normal array [2,4,6] -> 4", () => {
    // Arrange
    const numbers = [2, 4, 6];
    // Act
    const result = calculateAverage(numbers);
    // Assert
    expect(result).toBe(4);
  });
  test("returns the number itself for a single-item array [5] -> 5", () => {
    // Arrange
    const numbers = [5];
    // Act
    const result = calculateAverage(numbers);
    // Assert
    expect(result).toBe(5);
  });
  test("returns null for an empty array", () => {
    // Arrange
    const numbers = [];
    // Act
    const result = calculateAverage(numbers);
    // Assert
    expect(result).toBeNull();
  });
  test("returns null for non-array input (string)", () => {
    // Arrange
    const numbers = "123";
    // Act
    const result = calculateAverage(numbers);
    // Assert
    expect(result).toBeNull();
  });
  test("returns null for non-array input (null)", () => {
    // Arrange
    const numbers = null;
    // Act
    const result = calculateAverage(numbers);
    // Assert
    expect(result).toBeNull();
  });
  test('returns null if array contains a non-number value [1,2,"3"]', () => {
    // Arrange
    const numbers = [1, 2, "3"];
    // Act
    const result = calculateAverage([numbers);
    // Assert
    expect(result).toBeNull();
  });
});
