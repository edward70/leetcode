/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    if (rows === 1 && cols === 1) {
        return grid[0][0] === "1" ? 1 : 0;
    }
    
    let dfs = function(m,n) {
        if (m < 0 || n < 0 || m > rows - 1 || n > cols - 1 || grid[m][n] === "0") return; // check if out of bounds or water
        else grid[m][n] = "0"; // sink island
        
        dfs(m+1, n);
        dfs(m-1, n);
        dfs(m, n+1);
        dfs(m, n-1);
    }
    
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                dfs(i,j);
                count++;
            }
        }
    }
    
    return count;
};
