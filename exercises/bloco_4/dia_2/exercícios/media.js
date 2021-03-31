let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 50, 123];
let sizeArray = numbers.length;
let result = 0;
let media = 0;
for (index = 0; index <= numbers.length-1; index +=1) {
    result = result + numbers[index];
    media = result/sizeArray;
}
console.log(result);
console.log(media);