// const numbers = [19, 21, 30, 3, 45, 22, 15, 10, 12, 41, 20];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter(verifyEven);

// console.log(isEven); // [ 30, 22 ]

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]

// const objPeople = [
//   { name: 'José', age: 21 },
//   { name: 'Lucas', age: 17 },
//   { name: 'Maria', age: 16 },
//   { name: 'Gilberto', age: 18 },
//   { name: 'Vitor', age: 15 },
// ];

// const verifyAgeDrive = (arrayOfPeople) => (
//   arrayOfPeople.filter((people) => (people.age < 18))
// );

// console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]


// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByName = (name, listStudents) =>
//    listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

// const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
// console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]


// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// console.log(fullNames);

// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

// console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]