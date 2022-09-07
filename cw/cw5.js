// Суммируйте все числа данного массива ( cq. list ), кроме самого высокого и самого низкого элемента ( по значению, а не по индексу! ).
// Самый высокий или самый низкий элемент соответственно является одним элементом на каждом ребре,
// даже если их несколько с одинаковым значением.
// Обратите внимание на проверку ввода.
// Если вместо массива задано пустое значение(null, None, Nothingetc.),
// или данный массив представляет собой пустой список или список только с 1элементом, return 0.

function sumArray(array) {
  if (array == null || array.length == 1) {
    return 0;
  } else {
    let min = Math.min.apply(null, array),
      max = Math.max.apply(null, array);
    array.splice(array.indexOf(max), 1);
    array.splice(array.indexOf(min), 1);
    return array.reduce((sum, current) => sum + current, 0);
  }
}

//sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

let array = [];
console.log(sumArray(array));
