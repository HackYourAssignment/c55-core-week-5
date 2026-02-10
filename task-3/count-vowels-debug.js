function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {     // <= = <
    if (
      text[i].toLowerCase() === "a" ||
      text[i].toLowerCase() === "e" ||
      text[i].toLowerCase() === "i" ||
      text[i].toLowerCase() === "o" ||
      text[i].toLowerCase() === "u"
    ) {
      count++;
    }
  }

  return count;
}



console.log(countVowels("hello"));      
console.log(countVowels("javascript")); 
console.log(countVowels("JLOOIKANJDK")); 
console.log(countVowels("EIOAEYoiibtd")); 



