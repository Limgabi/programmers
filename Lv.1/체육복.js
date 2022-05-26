// Limbi
function solution(n, lost, reserve) {
  let answer = 0;
  const cnt = [];

  for (let i = 0; i < n; i++) {
    cnt[i] = 1;
  }
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  reserve.forEach((s) => {
    const idx = s - 1;
    if (!lost.includes(s)) {
      cnt[idx] = 2;
    }
  })
  lost.forEach((s) => {
    const idx = s - 1;
    if (!reserve.includes(s)) {
      if (cnt[idx - 1] === 2) {
        cnt[idx - 1] = 1;
        cnt[idx] = 1;
      } else if (cnt[idx + 1] === 2) {
        cnt[idx + 1] = 1;
        cnt[idx] = 1;
      } else cnt[idx] = 0;
    }
  })
  answer = cnt.filter((e) => e >= 1).length;
  return answer;
}


// Dea
function solution(n, lost, reserve) {
    let answer = n - lost.length;
    lost.sort();
    reserve.sort();
    
    // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 경우
    for(let i = 0; i < reserve.length; i++){
            for(let j = 0; j < lost.length; j++){
                if(reserve[i] == lost[j]){
                    reserve[i] = -1;
                    lost[j] = -1;
                    answer++;
                    break;
                    }
             }
    }
    for(let i = 0; i < reserve.length; i++){
            for(let j = 0; j < lost.length; j++){
                if(reserve[i] == -1){
                    break;
                }else if((reserve[i]-1) == lost[j] ||
                  (reserve[i]+1) == lost[j] ){
                    
                    lost[j] = -1;
                    answer++;
                    break;
                }
            }
        }
        
    return answer;
}
