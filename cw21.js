// Реализуйте функцию, которая принимает 3 целых значения a, b, c. 
// Функция должна возвращать true, если треугольник может быть построен со сторонами заданной длины,
// и false в любом другом случае.

// (В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми).

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(7, 2, 2));