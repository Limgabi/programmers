// Limbi
function solution(arr, divisor) {
    let answer = [];
    for (let i of arr) {
        if (i % divisor === 0) answer.push(i);
    }
    if (answer.length === 0) {
        answer.push(-1);
    }
    answer.sort((a,b) => a-b);
    return answer;
}

//ivory
function solution(arr, divisor) {
    let answer = [];   
    for(let i=0; i<arr.length; i++){
        if(arr[i]%divisor===0){
            answer.push(arr[i]);
        }
    }
    if (answer.length===0){
        answer.push(-1);
    }
    answer.sort ((a, b) => a-b);   
    return answer;
}


// Dea
function solution(arr, divisor) {
    const answer = arr.filter(x => x % divisor === 0);

    return answer.length !== 0 ? answer.sort((a, b) => a - b) : [-1];
}
