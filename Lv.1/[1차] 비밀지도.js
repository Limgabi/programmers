// Dea
function solution(n, arr1, arr2) {
    let answer =[];
    let row = []; // 겹친 지도를 넣을 배열
    
    for(let i = 0; i < n; i++){
        row.push(arr1[i] | arr2[i]); // 지도 겹치기
    }
  
    let temp =[];
    for(let i = 0; i < n; i++){
        temp = row[i].toString(2).padStart(n, '0'); // 이진수로 전환
        let temp2 = [...temp]; // 문자열을 배열로 저장
        for(let j = 0; j < temp2.length; j++){
            if(temp2[j] === '1') temp2[j] = '#'
            else temp2[j] = ' ';
        }
        answer.push(temp2.join('')); // 배열을 다시 문자열로 합치기
    }
    return answer;
}

// Limbi
function solution(n, arr1, arr2) {
    let answer = [];
    let arr = [];
   
    for (let i=0; i<arr1.length; i++) {
        arr.push((arr1[i]|arr2[i]).toString(2).padStart(n,'0'));
    }
    for (let e of arr) {
        e = e.replace(/1/g, '#');
        e = e.replace(/0/g, ' ');
        answer.push(e);
    }
    return answer;
}


//ivory
function solution(n, arr1, arr2) {
    var answer = [];
   
    for(let i=0; i<n; i++){
        const bin = (arr1[i] | arr2[i]).toString(2); //arr1, arr2 이진수로 반환
        let line = [];
        for(let j = bin.length-n; j<bin.length; j++) { // 자릿수 맞춰 줌 자릿수 11->00011
            if(bin[j] === '1') { // 1이면 '#', 그 외 ' ' push
                line.push('#');
            } else {
                line.push(' ');
            }
        }
        answer.push(line.join('')); //''을 통해 각 line을 합친 후 answer에 넣음
    }
    return answer;
}
