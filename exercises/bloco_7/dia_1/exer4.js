
let count = document.getElementById('count');
let countClicks = 0;

document.getElementById('clickBtn').addEventListener ('click', () => {
   count.innerHTML = countClicks += 1;
 });
