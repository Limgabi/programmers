// Limbi
function solution(strings, n) {
    let answer = [];
    answer = strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
    return answer;
}


// Dea
function solution(strings, n) {
    return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    return a > b ? 1 : -1;
    });
}

//ivoryeee
function solution(strings, n) {
    let answer = strings.sort((a, b) => {
       if(a[n] > b[n]) return 1; //정렬 순서 바뀜
        if(a[n] < b[n]) return -1; //그대로 정렬 
        if(a[n] === b[n]){
            if(a>b) return 1; //정렬 순서 바뀜
            if(a<b) return -1; //그대로 정렬 
            return 0;
        }  // 인덱스 n번째 글자가 같으면 사전순 정렬
    });
    
    return answer;
}
