/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let rows = board.length;
    let cols = board[0].length;
    
    if (rows < 3 && cols < 3) return;
    
    let dfs = function(m, n) {
        if (m < 0 || n < 0 || m > rows - 1 || n > cols - 1) return;
        if (board[m][n] === "O") board[m][n] = "p";
        else return;
        dfs(m+1, n);
        dfs(m-1, n);
        dfs(m, n+1);
        dfs(m, n-1);
    }
    
    for (let i = 0; i < rows; i++) {
        let first = board[i][0];
        let last = board[i][cols-1];
        if (first === "O") dfs(i, 0);
        if (last === "O") dfs(i, cols-1);
    }
    
    for (let i = 0; i < cols; i++) {
        let first = board[0][i];
        let last = board[rows-1][i];
        if (first === "O") dfs(0, i);
        if (last === "O") dfs(rows-1, i);
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === "p") board[i][j] = "O";
            else board[i][j] = "X";
        }
    }
};
