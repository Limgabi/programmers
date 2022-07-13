// Limbi
function solution(a, b) {
    let answer = 0;
    if (a<=b) {
        for (let i=a; i<=b; i++) {
            answer += i;
        }
    } else {
        for (let i=b; i<=a; i++) {
            answer += i;
        }
    }
    return answer;
}


/ivory
function solution(a, b) {
    var answer = 0;
    if(a>=b){
        for(let i=b; i<=a; i++){
            answer+= i;
        }
    }
    else{
        for(let i=a; i<=b; i++){
            answer += i;
        }
    }
    return answer;
}


// Dea
function solution(a, b) {
    if(a >= b) return a*(a+1)/2 - b*(b-1)/2;
    else return b*(b+1)/2 - a*(a-1)/2;
}
