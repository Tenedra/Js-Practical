// Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.

// Например: [0, 0, 0, 1]обрабатывается как 0001двоичное представление 1.

const binaryArrayToNumber = (arr) => {
  parseInt(arr.join(""), 2);
    
  // return arr.reduce((a, b) => (a << 1) | b);
    
  // let value = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   value += arr[i] * 2 ** (arr.length - i - 1);
  // }
  // return value;
};

console.log(binaryArrayToNumber([0, 0, 1, 1]));
