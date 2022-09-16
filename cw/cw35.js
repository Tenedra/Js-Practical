// Вам нужно подсчитать, сколько долин вы пройдете.

// Начинать всегда нужно с нулевого уровня.

// Каждый раз, когда вы опускаетесь ниже 0 уровня, считается входом в долину,
// а когда вы поднимаетесь до 0 уровня из долины, считается выходом из долины.

// Одна пройденная долина равна одному входу и одному выходу из долины.

function countingValleys(s) {
  let a = s.split("");
  let [count, c, prev] = [0, 0, 0];
  for (const i of a) {
    if (i === "U") {
      prev = c;
      c++;
    }
    if (i === "D") {
      prev = c;
      c--;
    }
    if (i != "F" && c === 0 && prev < 0) count += 1;
  }
  return count;
}

console.log(countingValleys("UFFDDFDUDFUFUUFFDDUFFDDUFFDDUDUDUDUDUDUUUUUUUUU"));
