// Dea
function solution(a, b) {
    let answer = '';
    let day = 0;
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for(let i = 0; i < a-1; i++){
        day += month[i];
    }
    
    day += b;
    
    switch(day % 7){
        case 0:
            answer = "THU";
            break;
        case 1:
            answer = "FRI";
            break;
        case 2:
            answer = "SAT";
            break;
        case 3:
            answer = "SUN";
            break;
        case 4:
            answer = "MON";
            break;
        case 5:
            answer = "TUE";
            break;
        case 6:
            answer = "WED";
            break;
        default:
            break;
    }
    
    return answer;
}

// Limbi
function solution(a, b) {
    let answer = '';
    let date = new Date(2016, a-1, b);
    switch (date.getDay()) {
        case 0:
            answer = "SUN";
            break;
         case 1:
            answer = "MON";
            break;
         case 2:
            answer = "TUE";
            break;
         case 3:
            answer = "WED";
            break;
         case 4:
            answer = "THU";
            break;
         case 5:
            answer = "FRI";
            break;
         case 6:
            answer = "SAT";
    }
    return answer;
}
