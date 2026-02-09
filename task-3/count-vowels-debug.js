function countVowels(text) {
  let count = 0;
  const textFix = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (
      textFix[i] === "a" ||
      textFix[i] === "e" ||
      textFix[i] === "i" ||
      textFix[i] === "o" ||
      textFix[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

// option 2
// function countVowels(text) {
//   let count = 0;
//   const textFix = text.toLowerCase();

//   for (const char of textFix) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }
