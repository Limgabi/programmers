// Limbi
function solution(s){
    let answer = true;
    
    let str = s.toLowerCase().split('');
    let pCnt = str.filter(e => e === 'p').length;
    let yCnt = str.filter(e => e === 'y').length;
    
    answer = pCnt === yCnt ? true : false;
    return answer;
}


// Dea
function solution(s){
    const p_count = s.toUpperCase().split("P").length;
    const y_count = s.toUpperCase().split("Y").length;

    return p_count === y_count;
}
