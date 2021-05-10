// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(5, isEven); // Testa quais números serão pares;
// repeat(5, isOdd); // Testa quais números serão ímpares;


const wakeUp = () => {
  console.log('Acordando!');
  breakFast();
};

const breakFast = () => {
  console.log('Vamos tomar café!');
  goingToSleep();

};

const goingToSleep = () => {
  console.log('Partiu dormir!');
};

const doingThings = (wake) => {
  wakeUp();
};

doingThings('bom dia');