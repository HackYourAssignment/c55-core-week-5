function countVowels(text) {
  let count = 0;
  let lowerText = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (
      lowerText[i] === "a" ||
      lowerText[i] === "e" ||
      lowerText[i] === "i" ||
      lowerText[i] === "o" ||
      lowerText[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("")); // returns 0
console.log(countVowels("AEIOU")); // Output: 5
