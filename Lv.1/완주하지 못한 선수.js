
// Limbi
function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    completion.sort();
    
    for (let i=0; i<participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return answer = participant[i];
            break;
        }
    }
    
    return answer;
}


// Dea
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}
