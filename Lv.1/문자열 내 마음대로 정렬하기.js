// Limbi
function solution(strings, n) {
    let answer = [];
    answer = strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
    return answer;
}


// Dea
function solution(strings, n) {
    return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    return a > b ? 1 : -1;
    });
}
