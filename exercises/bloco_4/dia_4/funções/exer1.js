let word = 'arara';
let aux;

function verificaPalindrome(word) {
  aux = word.split('').reverse().join('');
  if (aux === word) {
    return true;
  } else {
    return false;
  }
}
verificaPalindrome(word);
console.log(verificaPalindrome(word));