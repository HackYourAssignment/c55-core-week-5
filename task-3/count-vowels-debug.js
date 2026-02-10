

function countVowels(text) {
  let count = 0;

  text = text.toLowerCase(); // handle capital letters

  for (let i = 0; i < text.length; i++) {
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
 console.log(countVowels("hello"));
 console.log(countVowels("javascript"));
console.log(countVowels(""));

// function countVowels(text) {
//   let count = 0;

//   for (let i = 0; i <= text.length; i++) {
//     if (
//       text[i] === "a" ||
//       text[i] === "e" ||
//       text[i] === "i" ||
//       text[i] === "o" ||
//       text[i] === "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }
