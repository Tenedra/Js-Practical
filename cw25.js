// Возьмите 2 строки s1и s2включите только буквы от aдо z.
// Возвращает новую отсортированную строку, максимально длинную, содержащую отдельные
// буквы - каждая из которых берется только один раз - из s1 или s2.

function longest(s1, s2) {
    s = s1 + s2;
    return s.split("").filter((item, index) => s.split("").indexOf(item) === index).sort().join("");

    // return Array.from(new Set(s1 + s2)).sort().join("");

    // a = s1.split('').filter((item, index) => s.split("").indexOf(item) === index)
    //   b = s2.split("");
    //   while (b.length != 0) {
    //     let letter = b.shift();
    //     if (a.filter((x) => x === letter).length == 0) {
    //       a.push(letter);
    //     }
    //   }
    //   return a.sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));