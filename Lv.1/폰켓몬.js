// Dea
function solution(nums) {
    let n = nums.length/2;
    let arr = [...new Set(nums)]; // 배열에서 중복 제거
    return arr.length > n ? n : arr.length;
}
