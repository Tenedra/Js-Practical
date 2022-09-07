// Возвращает количество (количество) гласных в заданной строке.

// Мы будем рассматривать a, e, i, o, u как гласные для этого ката (но неy).

// Входная строка будет состоять только из строчных букв и / или пробелов.

function getCount(str) {
  //   let vowels = ["a", "e", "i", "o", "u"];
  //   let arr = str.split("");
  //   let count = 0;
  //   for (const i in arr) {
  //     for (const j in vowels) {
  //       if (j === i) {
  //         count += 1;
  //       }
  //     }
  //   }
  //   return count;

  //return (str.match(/[aeiou]/ig)||[]).length;

  //return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
  
  return Array.from(str.matchAll(/[aeiou]/g)).length;
}

console.log(getCount("abraicadabra"));
