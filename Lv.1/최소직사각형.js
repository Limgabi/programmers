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
