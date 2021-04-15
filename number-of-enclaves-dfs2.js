/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    
    if (rows < 3 && cols < 3) return 0; // all touch boundary when square is too small
    
    let dfs = function(m,n) {
        if (m < 0 || n < 0 || m > rows - 1 || n > cols - 1 || grid[m][n] === 0) return;
        else grid[m][n] = 0;
        
        dfs(m+1, n);
        dfs(m-1, n);
        dfs(m, n+1);
        dfs(m, n-1);
    }
    
    for (let i = 0; i < rows; i++) {
        let first = grid[i][0];
        let last = grid[i][cols-1];
        if (first === 1) dfs(i, 0);
        if (last === 1) dfs(i, cols-1);
    }
    
    for (let i = 0; i < cols; i++) {
        let first = grid[0][i];
        let last = grid[rows-1][i];
        if (first === 1) dfs(0, i);
        if (last === 1) dfs(rows-1, i);
    }
    
    return grid.map((x)=>x.reduce((a,b)=>a+b)).reduce((a,b)=>a+b);
};
