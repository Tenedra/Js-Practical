// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.

function reverseWords(str) {
  return str.split(" ").map((item) => item.split("").reverse().join("")).join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
