// Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
// Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой.
//     Предположим, что пустая строка является изограммой.Игнорируйте регистр букв.

function isIsogram(str) {
  // return new Set(str.toUpperCase()).size == str.length;

  return str
    .toLowerCase()
    .split("")
    .every((l, i) => str.toLowerCase().indexOf(l) === i);

  //   let a = str.toLowerCase().split("");
  //   for (let i = 0; i < a.length; i++) {
  //     c = a[i];
  //     if (str.toLowerCase().indexOf(c) != i) return false;
  //   }
  //   return true;
}

console.log(isIsogram("Dermatoglyphics"));
