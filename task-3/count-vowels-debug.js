function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}
countVowels("hello")      // 2
countVowels("javascript") // 3
countVowels("")           // 0
countVowels("HELLO")      // 2
