// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['maçã', 'uva', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['leite condensado', 'laranja', 'pitaya'];

// const fruitSalad = [...specialFruit, ...additionalItens];
// console.log(fruitSalad);

// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['maçã', 'uva', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['melância', 'goiaba', 'laranja'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;

console.log(realizaSaudacao(saudacao));



// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// [comida, bebida, animal] = [ bebida, animal, comida];

// console.log(comida, animal, bebida); // arroz gato água

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12]