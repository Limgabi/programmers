// Limbi
function solution(dartResult) {
    let answer = 0;
    let score = 0;
    let num = '0123456789';
    let arr = [];
    
    for (let i=0; i<dartResult.length; i++) {
        if (num.includes(dartResult[i])) {
            if (dartResult[i] == '1' && dartResult[i+1] == '0') {
                score = 10;
                i++;
            } else {
                score = Number(dartResult[i]);
            }  
        } else if (dartResult[i] === "S") {
            arr.push(score);
        } else if (dartResult[i] === "D") {
            arr.push(Math.pow(score, 2));
        } else if (dartResult[i] === "T") {
            arr.push(Math.pow(score, 3));
        } else if (dartResult[i] === "*") {
          arr[arr.length - 2] *= 2;
          arr[arr.length - 1] *= 2;
        } else if (dartResult[i] === "#") {
          arr[arr.length - 1] *= -1;
        }
    }
    answer = arr.reduce((pre, cur) => pre+cur, 0);
    return answer;
}
