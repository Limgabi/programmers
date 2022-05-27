// Dea
function solution(absolutes, signs) {
    let sum = 0;
    for(let i = 0; i < signs.length; i++){
        if(signs[i]) sum += absolutes[i];
        else sum += - absolutes[i];
    }
    return sum;
}

// Limbi
function solution(absolutes, signs) {
    var answer = 0;
    
    for (let i=0; i<absolutes.length; i++) {
        if (!signs[i]) {
            absolutes[i] *= -1;
        } else {
           continue;
        };
    }
    absolutes.map((num) => (
        answer += num
    ))
    
    return answer;
}
