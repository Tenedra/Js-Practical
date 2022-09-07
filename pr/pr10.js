//pr10_1
let i = 0;
let k = 0;

while (++i < 5) {
  console.log(i); //1, 2, 3, 4
}
console.log(" ");

while (k++ < 5) {
  console.log(k); //1, 2, 3, 4, 5
}

//pr10_2
for (let j = 0; j < 5; ++j) {
  console.log(j); //0, 1, 2, 3, 4
}

console.log(" ");

for (let n = 0; n < 5; n++) {
  console.log(n); //0, 1, 2, 3, 4
}

//pr10_3
for (let index = 0; index < 11; index += 2) {
  console.log(index);
}

//pr10_4
// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

let m = 0;
while (m < 3) {
  console.log(`number ${m}!`);
  m++;
}
