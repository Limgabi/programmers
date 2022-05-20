// Dea
function solution(nums) {
    let count = 0;
    
    function isPrime(n) {
        let divisor = 2;
 
        while (n > divisor) { 
            if(n % divisor === 0) { 
                return false; 
            } else {
                divisor++; 
            }
        }
 
        return true; 
    }
    
    // 숫자 3개 더하기
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length ; k++){
                let sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) count++;
            }
        }
    }
        
    return count;
}
