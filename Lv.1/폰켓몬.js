// Limbi
function solution(nums) {
    let answer = 0;
    let set = new Set(nums);
    
    if (Math.floor(nums.length / 2) <= set.size) {
        answer = Math.floor(nums.length / 2);
    } else answer = set.size;
    
    return answer;
}
