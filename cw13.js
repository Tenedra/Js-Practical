// Удалите пробелы из строки, затем верните результирующую строку.

function noSpace(x) {
   return x.replace(/\s/g, ""); // \s - поиск пробела, g - флаг для поиска всех совпадений
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));