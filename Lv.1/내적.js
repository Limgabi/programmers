// Dea
function solution(a, b) {
    const c = [];
    for(let i = 0; i < a.length; i++){
        c[i] = a[i] * b[i];
    }
    const answer = c.reduce((acc, cur) => acc + cur);
    return answer;
}

// Limbi
function solution(a, b) {
    var answer = 0;
    
    for (let i=0; i<a.length; i++) {
        answer += (a[i]*b[i]);
    }
    return answer;
}
