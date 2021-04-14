// wasted time with silly avoidable mistakes I had to debug :(, happy I got it to work though :)

function check(grid,visited,a,b) { // check if it's unvisited land
    let str = a.toString()+" "+b.toString();
    return !visited.includes(str) && grid[a][b] === "1";
}

let dfs = function(grid, visited, pos) {
    let m = pos[0];
    let n = pos[1];
    visited.push(m.toString()+" "+n.toString());
    if (m > 0 && check(grid, visited, m-1, n)) {
        dfs(grid, visited, [m-1,n]);
    }
    if (m < grid.length - 1 && check(grid, visited, m+1, n)) {
        dfs(grid, visited, [m+1,n]);
    }
    if (n > 0 && check(grid, visited, m,n-1)) {
        dfs(grid, visited, [m, n-1]);
    }
    if (n < grid[0].length - 1 && check(grid,visited,m,n+1)) {
        dfs(grid, visited, [m, n+1]);
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let visited = [];
    for (let m = 0; m < grid.length; m++) {
        for (let n = 0; n < grid[m].length; n++) {
            if (check(grid,visited,m,n)) {
                dfs(grid, visited, [m,n]);
                count++;
            }
        }
    }
    return count;
};
