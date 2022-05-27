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

//ivory
function solution(answers) {
    var answer = [];

    let way1 = [1,2,3,4,5];
    let way2 = [2,1,2,3,2,4,2,5];
    let way3 = [3,3,1,1,2,2,4,4,5,5];

    let man1,man2,man3;

    for(let i=0;i<answers.length;i++){
        man1 = answers.filter((v,i)=>{return (v===way1[i%5])}).length;
        man2 = answers.filter((v,i)=>{return (v===way2[i%8])}).length;
        man3 = answers.filter((v,i)=>{return (v===way3[i%10])}).length;
    }

    let largest = Math.max(man1,man2,man3);

    if(largest === man1) answer.push(1);
    if(largest === man2) answer.push(2);
    if(largest === man3) answer.push(3);

    return answer;
}
