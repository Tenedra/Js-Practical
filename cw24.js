// Проверьте, содержит ли строка одинаковое количество символов "x" и "o".
// Метод должен возвращать логическое значение и не учитывать регистр.
// Строка может содержать любой символ.

function XO(str) {
    arr = str.match(/[xo]/gi);
    return (
        arr.filter((i) => "xX".includes(i)).length === arr.filter((i) => "oO".includes(i)).length
        // arr.filter(x => x === 'xX').length === arr.filter(x => x === 'oO').length
    );
}

console.log(XO("xxOoio"));
