let value = prompt('Введите число больше 100: ', '');

if (value > 100) {
  alert("Спасибо");
} else if (value === null) {
    alert('Ладно, не больно таки и хотелось((');
} else {
    do {
      value = prompt("Вы ввели число не больше 100, введите число больше 100: ");
    } while (value <= 100 && value !== null);
}


