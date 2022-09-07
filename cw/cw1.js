//необходимо получить реальное время и перевести его в миллисекунды
function past(h, m, s) {
    let result = 1000 * (h * 60 * 60 + m * 60 + s);
    return result
}
let nowTime = new Date();

let h = nowTime.getHours();
let m = nowTime.getMinutes();
let s = nowTime.getSeconds();

console.log(`миллисекунд ${past(h, m, s)}`);