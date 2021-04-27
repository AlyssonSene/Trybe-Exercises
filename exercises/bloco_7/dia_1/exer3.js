const longestWord = textArray => {
  let wordArray = textArray.split(' ');
  console.log(wordArray);
  let maxLength = 0;
  let result = '';
  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que houve"));

// -------------------- //

