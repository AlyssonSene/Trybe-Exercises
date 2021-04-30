const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const turn = (object, key, value) => {
  object[key] = value;
};
turn(lesson2, 'Turno', 'noite');
console.log(lesson2);

const list = (obj) =>  Object.keys(obj);
console.log(list(lesson2));

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson2));

const pairKeyValue = Object.values(lesson2);
console.log(pairKeyValue); */

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(`O número total de alunos é ${getNumberOfStudents(allLessons)}`);