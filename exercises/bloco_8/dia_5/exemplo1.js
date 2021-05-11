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

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
// const [saudacao, realizaSaudacao] = saudacoes;

// console.log(realizaSaudacao(saudacao));



// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// [comida, bebida, animal] = [ bebida, animal, comida];

// console.log(comida, animal, bebida); // arroz gato água

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12]

// const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const person = {
//     firstName: 'João',
//     lastName: 'Jr II',
// };

// const otherPerson = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russian',
// };

// const { nationality = 'Brazilian'} = person;

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const newUser = (id, name, email) => {
//   return {
//     id,
//     name,
//     email,
//   };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));

// const multiply = (number, value = 1) => {
//   return number * value;
// };

// console.log(multiply(8, 5));

// const assert = require('assert');

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
// });


const assert = require('assert');

const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);


assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
