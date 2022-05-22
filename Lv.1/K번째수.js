// Limbi
function solution(array, commands) {
    let answer = [];
    for (let i=0; i<commands.length; i++) {
        const start = commands[i][0]-1;
        const end = commands[i][1];
        const k = commands[i][2];
        
        const arr = array.slice(start, end)
        arr.sort(function(a, b) {
            return a-b;
        })
        answer.push(arr[k-1]);
        
    }
    return answer;
}
