function countVowels(text) {
  let count = 0;
  const originalText = text;

  text = text.toLowerCase();

  console.log("Word:", originalText);
  console.log("Character count:", text.length);

  let indexLine = "";
  for (let i = 0; i < text.length; i++) {
    indexLine += `[${i}:${text[i]}] `;
  }
  console.log("Characters:", indexLine);

  console.log("\nChecking vowels...");

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
      console.log(
        `Vowel found at index ${i}: "${text[i]}" → total vowels: ${count}`,
      );
    }
  }

  console.log("\nTotal vowels:", count);

  return count;
}

countVowels("hackyourfuture");
countVowels("hello");
countVowels("javascript");
countVowels("");
countVowels("HELLO");
