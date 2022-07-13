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


//ivory
function solution(dartResult) {
    var score = 0; // 총점 
    var answer = []; // 점수 담을 문자열 
    var temp = 0; // 숫자 담을 변수
    
    for(let i=0; i<dartResult.length; i++) {
        if(dartResult[i] >= 0 && dartResult[i] <= 9 ) { //숫자일 경우
            if( dartResult[i] == 1 && dartResult[i+1] == 0 ) {
                // 10일 경우 10으로 만들어주고 0을 건너뛰기 위해 i++ 해줌.
                temp = 10;
                i++;
            } else { // 0이 아닐 경우 그대로 temp에 넣어줌.
                temp = dartResult[i];
            }
        } else if(dartResult[i] === "S") { // 1제곱
            answer.push(temp);
            
        } else if (dartResult[i] === "D") { // 2제곱
            answer.push(Math.pow(temp,2));
            
        } else if (dartResult[i] === "T") { // 3제곱
            answer.push(Math.pow(temp,3));
            
        } else if (dartResult[i] === "#") { 
            answer[answer.length-1] *= -1; // 아차상, answer의 끝 - 해당 점수 -
            
        } else if (dartResult[i] === "*") { // 스타상, (직전 + 해당) *2
            answer[answer.length-1] *= 2;
            answer[answer.length-2] *= 2;
            
        }
    }
    for(let i=0; i<answer.length; i++) { // 보너스, 옵션 적용된 점수들 합치기
        score += Number(answer[i]);
    }
        
    return score;
}


// Dea
function solution(dartResult) {
    let score = 0;
    let scoreArr = [];
    
    for(let i = 0; i < dartResult.length; i++){
        // 숫자일 때
        if(!isNaN(dartResult[i])){
            score = Number(dartResult[i-1]) === 1 ? 10 : Number(dartResult[i]);
        }else if(dartResult[i] === "S") scoreArr.push(score);
        else if(dartResult[i] === "D")  scoreArr.push(Math.pow(score, 2));
        else if(dartResult[i] === "T") scoreArr.push(Math.pow(score, 3));
        else if(dartResult[i] === "*"){
            scoreArr[scoreArr.length-2] = scoreArr[scoreArr.length-2] * 2;
            scoreArr[scoreArr.length-1] = scoreArr[scoreArr.length-1] * 2; 
        }else if(dartResult[i] === "#"){
            scoreArr[scoreArr.length-1] = -scoreArr[scoreArr.length-1];
        }
    }
    return scoreArr.reduce((acc, cur) => acc + cur, 0);
}
