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


//ivoryeee

function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
        let array=[];
        // i의 약수 찾기
        for(let j = 0; j <= i; j++) {
            if(i % j === 0) array.push(j) //j가 i의 약수라면 array에 j를 집어넣음 
        }
        array.length % 2 === 0 ? answer += i : answer -= i
        //array가 짝수라면 answer에 i값을 더해주고, 홀수라면 빼줌 
    }
    return answer
}
