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


// Dea
function solution(d, budget) {
    let count = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    for(let i = 0; i < d.length; i++){
        sum += d[i];
        if(sum <= budget){
            count++;
        }
    }
    return count;
}
