// Dea
function solution(board, moves) {
    var answer = 0;
    let stack = [];
    let temp = 0;
    for(let i = 0; i < moves.length; i++){ 
        for(let j = 0; j < board.length; j++){ 
            if(board[j][moves[i] - 1] != 0){
                temp = board[j][moves[i] - 1];
                board[j][moves[i] - 1] = 0;
                if(temp === stack[stack.length-1]){
                        stack.pop();
                        answer += 2;
                    }else stack.push(temp);
                    break;
                
            }
            
        }
        
    }
    return answer;
}

// Limbi
function solution(board, moves) {
    const basket = [];
    let answer = 0;
    
    moves.map(v => {
        const doll = pickup(board, v);
        if (doll) {
            if (basket[basket.length-1] === doll) {
                basket.pop();
                answer += 2;
            } else {
                basket.push(doll);
            }
        }
    })
    return answer;
}
              
function pickup(board, idx) {
   const newBoard = board
   for (let i=0; i<newBoard.length; i++) {
        if (newBoard[i][idx-1] !== 0) {
            const doll = newBoard[i][idx-1];
            newBoard[i][idx-1] = 0;
            return doll;
        }
   }
}
