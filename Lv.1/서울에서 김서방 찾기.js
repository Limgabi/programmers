// Limbi
function solution(seoul) {
    let answer = '';
    let idx = seoul.indexOf('Kim');
    answer = `김서방은 ${idx}에 있다`;
    return answer;
}


// Dea
function solution(seoul) {
    return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}


//ivoryeee
function solution(seoul) {
    for(let i =0 ; i <seoul.length; i++){
        if(seoul[i]==="Kim") return `김서방은 ${i}에 있다`
    }
}
