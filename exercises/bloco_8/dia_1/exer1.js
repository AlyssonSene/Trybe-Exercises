const newEmployees = (newPerson) => {
  const employees = {
    id1: newPerson('Pedro Guerra'),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: newPerson('Luiza Drumond'),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: newPerson('Carla Paiva'),
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    id4: newPerson('Alysson Sene'),
  }
  return employees;
};

const newPerson = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email:`${email}@betrybe.com`};
};

console.log(newEmployees(newPerson));