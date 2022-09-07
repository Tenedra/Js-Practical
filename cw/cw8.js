//Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.

//Примеры (Ввод -> Вывод):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  //   return str.replace(/(.)/g, "$1$1");
  let str_arr = str.split("");
  for (let index = 0; index < str_arr.length; index++) {
    str_arr[index] += str_arr[index];
  }
  return str_arr.join("");
}
let str = "jop-_ a";
console.log(doubleChar(str));
