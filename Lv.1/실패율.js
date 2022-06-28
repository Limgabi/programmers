// Limbi
function solution(N, stages) {
    let answer = [];
    let stage = [];

    for (let i=0; i<N; i++) {   
        let failCnt = stages.filter(n => n === i+1).length;
        let playerCnt = stages.filter(n => n >= i+1).length;;    
        
        stage.push([i+1, failCnt/playerCnt]);
    }
    stage.sort((a,b) => b[1]-a[1]);
    stage.map((i) => answer.push(i[0]));
    return answer;
}
