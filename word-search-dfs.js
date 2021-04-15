/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    let output = false;
    
    let dfs = function(m,n,str,i) {
        if (str === word) {
            output = true;
            return;
        }
        
        if (m < 0 || n < 0 || m >= rows || n >= cols) return; // check out of bounds
        let char = board[m][n]; // get character at board pos      
        if (word[i] !== char || board[m][n] === "#") return; // check if already visited or wrong letter

        board[m][n] = "#"; // set visited
        str+=char; // add character to string being built
        i++; // increment index
            
        dfs(m+1,n,str,i);
        dfs(m-1,n,str,i);
        dfs(m,n+1,str,i);
        dfs(m,n-1,str,i);
        
        board[m][n] = char; // revert visited for other search stems
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0]) {
                dfs(i,j,"",0);
            }
        }
    }
    return output;
};
