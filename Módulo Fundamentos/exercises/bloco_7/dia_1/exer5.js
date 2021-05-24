let phrase = 'Olá, Tryber x aqui!';
let user = "Alysson";
const array = ["CSS", "JavaScript", "HTML", "Teach", "Run"];


const message = (user, array) => {
  if(phrase.indexOf('x')) {
    phrase = (`Olá, Tryber ${user} aqui!
    Tudo bem?
    Minhas pricipais skiils são:
    ${array}
    #goTrybe`);
  }
  return phrase;
};

console.log(message(user, array));



