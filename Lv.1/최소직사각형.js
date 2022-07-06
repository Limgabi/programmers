// Dea
function solution(sizes) {
    let min = 0;
    let temp = 0;
    const max = Math.max(...sizes.flat());
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] > sizes[i][1]) min = sizes[i][1];
        else min = sizes[i][0];
        
        if(temp < min) temp = min;
    }
    return max * temp;
}

// Limbi
function solution(sizes) {
    let answer = 0;
    let w = [];
    let h = [];
    for (let i=0; i<sizes.length; i++) {
        if (sizes[i][0] > sizes[i][1]) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
        w.push(sizes[i][0]);
        h.push(sizes[i][1]);
    }
    answer = Math.max(...w) * Math.max(...h);
    return answer;
}

//ivory
function solution(sizes) {
  let width = 0; //가로 중 가장 긴 값
  let height = 0; //세로 중 가장 긴 값
  
  for(let len of sizes) {
  //len[0]이 가로길이, len[1]이 세로길이 이다.
    if(len[0] > len[1]){ // 가로가 더 긴 경우
      if(width < len[0]) width = len[0]; //기존 width 새로운 가로 길이가 더 길 경우 width=len[0]
      if(height < len[1]) height = len[1]; //기존 height 새로운 세로 길이가 더 길 경우 height=len[0]
    }
    else { // 세로가 더 긴 경우
      if(width < len[1]) width = len[1]; //기존의 가로 중 가장 큰 값인 width보다 세로가 더 긴 경우
      if(height < len[0]) height = len[0]; //기존의 세로 중 가장 큰 값인 height보다 세로가 더 긴 경우
    }
  };
  return width * height;
}
