// Limbi
function solution(left, right) {
    let answer = 0;
    let divisorObj = {};
    
    for (let i=left; i<=right; i++) {
        let cnt = 0;
        for (let j=1; j<=i; j++) {
            if (i % j === 0) cnt++;
        }
        divisorObj[i] = cnt;
    }
    
    for (let i in divisorObj) {
        if (divisorObj[i] % 2 === 0) {
            answer += parseInt(i);
        } else answer -= parseInt(i);
    }
    
    return answer;
}


// Dea
function solution(left, right) {
    let count = 0;
    let sum = 0;
    for(let i = left; i <= right; i++){
        for(let j = 1; j <= i; j++){
            if(i % j == 0) count++;
        }
        if(count % 2 === 0) {
            sum += i;
        }else sum -= i;
        count = 0;
    }
    return sum;
}
