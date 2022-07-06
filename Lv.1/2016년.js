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


//ivory
function solution(a, b) {
    const weekday=['SUN','MON','TUE','WED','THU','FRI','SAT']; //날짜 배열 선언
    const dateStr="2016-"+a+"-"+b;  //날짜 형식 
    let date=new Date(dateStr);     //date 객체 생성
    return weekday[date.getDay()]; //date 객체의 getDay 메소드 통해 weekday 구하기 
}
