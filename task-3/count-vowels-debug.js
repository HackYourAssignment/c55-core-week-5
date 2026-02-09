function countVowels(text) {
  let count = 0;
  const lower = text.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    if (
      lower[i] === "a" ||
      lower[i] === "e" ||
      lower[i] === "i" ||
      lower[i] === "o" ||
      lower[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello"));// returns 2
console.log(countVowels("javascript"));// returns 3
console.log(countVowels(""));// returns 0
console.log(countVowels("HELLO"))// return 2