// Limbi
function solution(d, budget) {
    let answer = 0;
    d.sort((a,b) => a-b);
    for (let e of d) {
        if (e > budget) break;
        answer++;
        budget -= e;
    }
    return answer;
}


// Dea
function solution(d, budget) {
    let count = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    for(let i = 0; i < d.length; i++){
        sum += d[i];
        if(sum <= budget){
            count++;
        }
    }
    return count;
}

//Ivoryeee
function solution(d, budget) {
    var answer = 0;
    var count = 0;
    
    d.sort((a,b)=>a-b);
    
    for(let i of d){
        answer+=i;
         if(answer > budget) break;
        count ++
    }
    return count;
}
