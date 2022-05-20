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
