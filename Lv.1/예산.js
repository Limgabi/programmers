// Limbi
function solution(d, budget) {
    let answer = 0;
    d.sort((a,b) => a-b);
    for (let e of d) {
        if (e > budget) break;
        answer++;
        budget -= e;
    }
    return answer;
}
