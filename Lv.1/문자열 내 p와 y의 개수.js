// Limbi
function solution(s){
    let answer = true;
    
    let str = s.toLowerCase().split('');
    let pCnt = str.filter(e => e === 'p').length;
    let yCnt = str.filter(e => e === 'y').length;
    
    answer = pCnt === yCnt ? true : false;
    return answer;
}
