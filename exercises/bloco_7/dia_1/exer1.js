const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//metodo com buble sort

const NumOrdered = (oddsAndEvens) => {
  for (let index = 0; index <= oddsAndEvens.length; index += 1) {
    for (let index2 = 1; index2 <= oddsAndEvens.length; index2 += 1) {
      if(oddsAndEvens[index2] > oddsAndEvens[index2 - 1]) {
        let aux = oddsAndEvens[index2];
        oddsAndEvens[index2] = oddsAndEvens[index2 - 1];
        oddsAndEvens[index2 - 1] = aux;
      }
    }
  }
  return oddsAndEvens;
};

console.log(`O array foi ordenado de forma decrescente: ${NumOrdered(oddsAndEvens)}`);

//metodo usando o função .sort()

const NunsOrdered = (oddsAndEvens) => {
  oddsAndEvens.sort((a ,b) => a - b);
  return oddsAndEvens;
};

console.log(`o array foi ordenado de forma crescente ${NunsOrdered(oddsAndEvens)}`)

//metodo simplificado em uma linha

console.log(`O array foi ordenado de forma crescente ${oddsAndEvens.sort((a, b) => a - b)}`);