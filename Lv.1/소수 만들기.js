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

// Libmi
function solution(nums) {
    var answer = 0;
    var sumArr = new Array();
    
    for (let i=0; i<nums.length-2; i++) {
        var sum = 0;
        for (let j=i+1; j<nums.length-1; j++) {
            for (let k=j+1; k<nums.length; k++) {
                sum = nums[i]+nums[j]+nums[k];
                sumArr.push(sum);
            }
        }
    }
   
    sumArr.map(function(num) {
        if (isPrime(num)) answer++;
    })
    
    return answer;
}

function isPrime(num) {
    const sqrt = parseInt(Math.sqrt(num));
    
    if (num <= 1) return false;
    if (num % 2 === 0) return num === 2 ? true : false;
    for (let i=3; i <= sqrt; i+=2) {
        if (num % i === 0) return false;
    }
    return true;
}
