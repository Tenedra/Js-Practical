n = 20;
let k;
for (let i = 2; i < n; i++) {
  k = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      k++;
    }
  }
  if (k <= 2) {
    console.log(i);
  }
}

//OR

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
  // Для всех i...
  for (let j = 2; j < i; j++) {
    // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }
  console.log(i); // простое число
}
