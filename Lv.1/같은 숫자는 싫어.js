// Limbi
function solution(arr)
{
    let answer = [];
    answer = arr.filter((e, idx) => e !== arr[idx+1]);
    return answer;
}
