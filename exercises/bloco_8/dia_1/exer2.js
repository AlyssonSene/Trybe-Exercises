// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));

const randomNumber = (myNumber) => {
  const number = Math.floor((Math.random() * 6) + 1);
  checkNumber(myNumber, number);
};

const checkNumber = (myNUmber, randomNumber) => {
  console.log((myNUmber === randomNumber) ? 'You won!' : 'Try Again!');
}; 
 randomNumber(5);