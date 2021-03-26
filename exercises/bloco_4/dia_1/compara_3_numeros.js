var n1 = 5;
var n2 = 25;
var n3 = 2;

if (n1>n2 && n1>n3) {
    console.log('O número', n1 , 'é o maior');
}
else if (n2>n1 && n2>n3) {
    console.log('O número', n2 , 'é o maior');
}
else if (n3>n1 && n3>n2) {
    console.log('O número', n3 , 'é o maior');
}
else {
    console.log('Dois ou mais numeros são iguais')
}