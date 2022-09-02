// Рассмотрим массив / список овец, где некоторые овцы могут отсутствовать на своем месте.
// Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве(true означает присутствует).

// Подсказка: не забудьте проверить наличие неверных значений, таких как null/undefined

function countSheeps(arrayOfSheep) {
  //   let c = 0;
  //     if (
  //       arrayOfSheep.indexOf(undefined) === -1 &&
  //       arrayOfSheep.indexOf(null) === -1
  //     ) {
  //       for (let i = 0; i < arrayOfSheep.length; i++) {
  //         arrayOfSheep[i] === true ? (c += 1) : "";
  //       }
  //       return c;
  //     }
  return arrayOfSheep.filter(Boolean).length;
}

let arr = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(arr));
