let test = [2, 3, 6 ,7 ,10 ,1];
function indiceDoMaior(test) {
  let indiceMaior = 0;
  for (let indice in test) {
    if (test[indiceMaior] < test[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}
console.log(indiceDoMaior(test));