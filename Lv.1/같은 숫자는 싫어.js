// Limbi
function solution(arr)
{
    let answer = [];
    answer = arr.filter((e, idx) => e !== arr[idx+1]);
    return answer;
}

//ivory
function solution(arr)
{
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== arr[i+1]) answer.push(arr[i])
    }
    return answer;
}


// Dea
function solution(arr)
{
    let answer = [arr[0]]; // 중복을 뺀 값을 넣는 배열
    
    for(let i=1; i<arr.length; i++){
        if(answer[answer.length-1] !== arr[i]){
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
