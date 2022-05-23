// Limbi
function solution(answers) {
    let answer = [];
    let anscnt = [];
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let one_cnt = 0, two_cnt = 0, three_cnt = 0, max_cnt = 0;
    
    for (let i=0; i<answers.length; i++) {
        if (answers[i] === one[i%5]) one_cnt++;
        if (answers[i] === two[i%8]) two_cnt++;
        if (answers[i] === three[i%10]) three_cnt++;
    }
    
    anscnt.push(one_cnt, two_cnt, three_cnt);
    max_cnt = Math.max.apply(null, anscnt);
    
    for (let i=0; i<anscnt.length; i++) {
        if (anscnt[i] === max_cnt) answer.push(i+1);
    }
  
    return answer;
}
