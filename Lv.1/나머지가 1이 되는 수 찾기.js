// Dea
function solution(n) {
    let answer = 0;
    let temp = n - 1;
    for(let i = 2; i<=temp; i++){
        if(temp % i === 0) {
            answer = i;
            break;
        }  
    }
    return answer;
}
