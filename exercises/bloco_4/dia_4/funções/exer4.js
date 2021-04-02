let words = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Paralelepipedo'];

function maiorPalavra(words) {
  let maiorPalavra = words[0];
for (let index in words) {
  if (maiorPalavra.length < words[index].length) {
    maiorPalavra = words[index];
  }
}
return maiorPalavra;
}
console.log(maiorPalavra(words));