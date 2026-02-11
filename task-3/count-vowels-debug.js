function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
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

console.log(countVowels("hello"));
