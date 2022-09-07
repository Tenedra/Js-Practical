//pr9_1
let age = 17;
console.log(14 <= age && age <= 90);
console.log(!(14 <= age && age <= 90));
console.log(14 > age || age > 90);

//pr9_2
let login = prompt('Введите ваш логин', '');

if (login == 'Админ') {

    let password = prompt('Введите пароль', '');

    if (password == "Я главный") {
        alert("Здравствуйте!");
    } else if (password === null || password == '') {
        alert("Неверный пароль");
    }

} else if (login == '' || login === null) {
    alert('Отменено');

} else {
    alert('Я вас не знаю');
}

//esc всегда возвращает null