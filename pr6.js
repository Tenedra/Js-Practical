// pr 6_1
let counter1 = 1,
    counter2 = 1;

console.log(counter1++, ++counter2); //1, 2

// pr 6_2
console.log('' + 1 + 0); //10
console.log("" - 1 + 0  ); //-1
console.log(true + false); //1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log("  -9  " + 5); // -9 5
console.log("  -9  " - 5); //-14
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(" \t \n" - 2); //-2

//pr 6_3

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // a+b
alert(`${+a + +b}`); //a+b
alert(`${a + b}`); //'ab'   