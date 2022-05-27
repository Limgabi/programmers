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


// Dea
function solution(array, commands) {
    let answer = [];
    let new_arr = [];
    for(let i = 0; i < commands.length; i++){
        new_arr = (array.slice(commands[i][0]-1, commands[i][1])).sort((a,b)=> a-b);
        answer.push(new_arr[commands[i][2]-1]);
    }
    return answer;
}

//ivoryeee
function solution(array, commands) {
    var answer = [];

    var temp;
    for(var i = 0; i < commands.length; i++){
        temp = array.slice(commands[i][0] - 1, commands[i][1]).sort(function(a, b){
            return a - b;
        })
        result.push(temp[commands[i][2] - 1]);
    }
    return answer;
}
