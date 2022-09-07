// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается 2-м аргументом (также строкой).

// const solution = (str, ending) => str.endsWith(ending);

function solution(str, ending) {
    // return str.endsWith(ending);

    return str.includes(ending, str.length - ending.length);
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution("abc", "abcd"));