// Dea
function solution(price, money, count) {
    let sum = 0;
    for(let i = 1; i <= count; i++){
        sum += price * i ;
    }
    return money > sum ? 0 : sum - money
}

// Limbi
function solution(price, money, count) {
    let answer = 0;
    for (let i=0; i<count; i++) {
        answer += price*(i+1);
    }
    money > answer ? answer = 0 : answer -= money;
    return answer;
}
