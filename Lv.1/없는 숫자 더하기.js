// Dea
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur);
}

// Limbi
function solution(numbers) {
    var answer = 0;
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const diff = numArr.filter(e => !numbers.includes(e));
    diff.map(num => answer+=num);
    
    return answer;
}
