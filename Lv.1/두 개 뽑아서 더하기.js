// Limbi
function solution(numbers) {
    let answer = [];
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            answer.push(numbers[i]+numbers[j]);
        }
    }
    answer = Array.from(new Set(answer)).sort((a,b) => a-b);
    return answer;
}


// Dea
function solution(numbers) {
    let arr = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i+1; j < numbers.length; j++){
            arr.push(numbers[i] + numbers[j]);
        }
    }
    // 중복 제거후 정렬
    return [...new Set(arr)].sort((a, b) => a - b);
}

//Ivoryeee
function solution(numbers) {
    let temp = new Set() //중복을 제거한 값의 집합 객체 Set 생성 
    
    for(let i = 0; i<numbers.length; i++) {
        for(let j = i+1; j<numbers.length; j++) {
            temp.add(numbers[i] + numbers[j]);
        }
    }
    
    return Array.from(temp).sort((a, b) => a - b);
}
