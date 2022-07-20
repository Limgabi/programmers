// Limbi
function solution(s) {
    let answer = '';
    answer = s.split('').sort().reverse().join('');
    return answer;
}


// Dea
function solution(s) {
    let answer = [...s].sort(function(a, b) {
    if(a < b) return 1;
    if(a > b) return -1;
    if(a === b) return 0;
});
    let upper = answer.filter(x => x === x.toUpperCase());
    let lower = answer.filter(x => x === x.toLowerCase());
    
    return [...lower, ...upper].join('');
}


//ivoryeee
function solution(s) {
    return s.split('').sort().reverse().join('');
}
