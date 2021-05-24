var ang1 = -60;
var ang2 = 60;
var ang3 = 61;
var totalAng = 180;

if (ang1<0 || ang2<0 || ang3<0){
    console.log('Angulo inválido');
}
else if (ang1+ang2+ang3===totalAng) {
    console.log('True');
}
else {
    console.log('False');
}