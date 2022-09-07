//pr8_1

let qYear = prompt("Какое официальное название JavaScript?", "");

if (qYear == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript");
}

//pr8_2
let value = prompt('Введите число', '');

if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

//pr8_3
const a = 3;
const b = 4;
let result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);

//pr8_4
let login = "Сотрудник";

let message = (login == "Сотрудник") ? "Привет" :
    (login == "Директор") ? "Здравствуйте" : 
    (login == "") ? "Нет логина" : " "; 

alert(message);