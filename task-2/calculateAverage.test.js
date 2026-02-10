import {describe , it , expect} from "vitest";
import {calculateAverage} from "./calculateAverage";

describe("calculateAverage",() =>{

  it("returns the average for an array of valid numbers", ()=>{
    const result = calculateAverage([2,4,6]);
    expect(result).toBe(4);
  });

  it("returns the same number when array has one element", ()=>{
    const result = calculateAverage([5]);
    expect(result).toBe(5);
  });

  it("returns null when the array is empty", ()=>{
    const result = calculateAverage([]);
    expect(result).toBeNull();
  });

  it("returns null when input is not an array", ()=>{
     expect(calculateAverage("123")).toBeNull();
     expect(calculateAverage(null)).toBeNull();
     expect(calculateAverage(123)).toBeNull();

  });

  it("returns null when the array contains a non-number value", ()=>{
    const result = calculateAverage([1,2,"3"]);
    expect(result).toBeNull();
  });

});