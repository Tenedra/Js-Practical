// В этом простом задании вам присваивается число, и вы должны сделать его отрицательным.
// Но, может быть, число уже отрицательное ?

// Число может быть уже отрицательным, и в этом случае никаких изменений не требуется.
// Ноль(0) не проверяется на наличие какого - либо определенного знака.
// Отрицательные нули не имеют математического смысла.

function makeNegative(num) {
  return num > 0 ? -num : num;
}

console.log(makeNegative(5));