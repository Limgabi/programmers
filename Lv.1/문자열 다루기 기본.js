// Limbi
function solution(s) {
    let answer = true;
    answer = (s.length === 4 || s.length === 6) && (!isNaN(s)) && (!s.includes('e')) ? true : false;
    return answer;
}
