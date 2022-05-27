
// Limbi
function solution(nums) {
    let answer = 0;
    let set = new Set(nums);
    
    if (Math.floor(nums.length / 2) <= set.size) {
        answer = Math.floor(nums.length / 2);
    } else answer = set.size;
    
    return answer;
}


// Dea
function solution(nums) {
    let n = nums.length/2;
    let arr = [...new Set(nums)]; // 배열에서 중복 제거
    return arr.length > n ? n : arr.length;
}

//ivory
function solution(nums) {
  let numLength = nums.length
  var answer = 0;
  let arr = [];

  for(let num of nums){
      if(!arr.includes(num)) arr.push(num);
      if(arr.length === nums.length/2) return arr.length;
  }
  answer = arr.length
  return answer;
}
