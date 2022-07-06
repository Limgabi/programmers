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

// Limbi
function solution(n) {
    let answer = 0;
    for (let i=2; i<n; i++) {
        if (n % i === 1) {
            answer = i;
            break;
        }
    }
    return answer;
}

//ivoryeee
function solution(n) {
    let answer=0;
    for(let i=0; i<n; i++){
        if(n%i==1){
            answer=i;
            break;
        }
    }
    return answer;
}
