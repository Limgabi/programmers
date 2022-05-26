// Dea
function solution(answers) {
    let first = [1,2,3,4,5];
    let second = [2,1,2,3,2,4,2,5];
    let third = [3,3,1,1,2,2,4,4,5,5];
    let count = [0,0,0];
    let answer = [];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === first[i%5]) count[0]++;
        if(answers[i] === second[i%8]) count[1]++;
        if(answers[i] === third[i%10]) count[2]++;
    }
    
    let arr = count.slice(); // 깊은복사
    arr.sort((a,b) => a-b);
    for(let i = 0; i < arr.length; i++){
        if(count[i] === arr[2]){
            answer.push(i+1);
        }
    }
    return answer;
}
