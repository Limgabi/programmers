// Limbi
function solution(s) {
    let answer = '';
    let len = s.length;
    
    if (len % 2 === 0) {
        answer = s[len/2-1]+s[len/2];
    } else {
        answer = s[Math.floor(len/2)];
    }
        
    return answer;
}

//ivoryeee

function solution(s) {
    let answer = '';
    if (s.length % 2 == 0){
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    }
    else{
        answer =  s[parseInt(s.length / 2)] ;
    }   
    return answer;
}
