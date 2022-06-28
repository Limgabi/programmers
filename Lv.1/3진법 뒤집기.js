// Limbi 
function solution(n) {
    let answer = 0;
    answer = parseInt(n.toString(3).split('').reverse().join(''), 3);
    return answer;
}


// Dea
function solution(n) {
    let number = n.toString(3).split('').reverse().join('')
    return parseInt(number, 3);
}

//Ivoryeee
function solution(n) {
    //n 3진수 변환 후 각 문자 reverse해 string이라는 변수로 joing시킴
    const string = n.toString(3).split('').reverse().join('');
    //string을 3진수로 변환
    return parseInt(string, 3);

}
