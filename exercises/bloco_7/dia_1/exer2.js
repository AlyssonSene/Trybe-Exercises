//metodo fatorial com função comum
const number = 5;
function fatorial(number) {
   let result = number;
   for (let index = 1; index < number; index += 1) {
      result *= index;
   }
   return result;
};

console.log(fatorial(5));


// com ES6

const numberFatorial = number => {
   let result = 1;
   for (let index = 2; index <= number; index += 1) {
      result *= index;
   }
   return result;
};
console.log(numberFatorial(5));

// recursiva

const fatNumber = number => (number > 1 ) ? number * fatNumber(number - 1) : 1 ;
console.log(fatNumber(5));