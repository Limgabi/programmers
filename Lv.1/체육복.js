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
