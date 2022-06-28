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


// Dea
function solution(N, stages) {
    let failureRate = []; // 실패율
    let reachedPlayer = stages.length; // 해당 스테이지에 도달한 플레이어 수
  
  for (let i = 1; i <= N; i += 1) {
    let num = stages.filter(e => e === i).length; // 해당 스테이지 멈춰있는 플레이어 수
    failureRate.push({ stageNum: i, rate: num / reachedPlayer });
    reachedPlayer -= num;
  }

     failureRate.sort((a, b) => b.rate - a.rate);
  return failureRate.map(obj => obj.stageNum); // 스테이지 번호로 되어있는 새로운 배열 생성
}
