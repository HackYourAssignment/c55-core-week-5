function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    // using i <= text.length makes text[i] become undefined
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World"));

/*
- What value does text[i] have when i === text.length?
When i === text.length, text[i] is undefined

- Should uppercase vowels be counted?
yes, to make the function more user-friendly
we can convert the text to lowercase before counting the vowels.
This way, both uppercase and lowercase vowels will be counted.
*/
