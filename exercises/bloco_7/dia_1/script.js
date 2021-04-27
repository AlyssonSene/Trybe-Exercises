const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena = () => {
  for (let index = 0; index <= oddsAndEvens.length; index += 1) {
    for (let index2 = 1; index2 <= oddsAndEvens.length; index2 += 1) {
      if (oddsAndEvens[index2] > oddsAndEvens[index2-1] ) {
        let aux = oddsAndEvens[index2];
        oddsAndEvens[index2] = oddsAndEvens[index2-1];
        oddsAndEvens[index2 - 1] = aux;
      }
    }
  }
  return oddsAndEvens;
  
}; 
console.log(`Os numeros ${ordena(oddsAndEvens)} se encontram ordenados de forma decrescente!`);

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);
