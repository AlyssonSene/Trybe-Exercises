let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 150];
let smallerNumber = numbers[0];
for (index = 1; index < numbers.length; index +=1) {
	if (smallerNumber > numbers[index]){
		smallerNumber = numbers[index];
	}
}console.log(smallerNumber);
