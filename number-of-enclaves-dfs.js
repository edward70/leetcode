// scuffed bc I interpreted the question wrong then had to hack the code into something else once I realized what the question actually meant
let sink = function(grid, m, n) { // find floating, return true if on boundary, number of tiles if not
    grid[m][n] = 0;
    let boundary = false;
    let count = 0;
    
    if (m > 0) {
        if (grid[m-1][n]) {
            count++;
            let val = sink(grid, m-1, n);
            val === true ? boundary = true : count+=val;
        }
    } else {
        boundary = true;
    }
    
    if (m < grid.length - 1) {
        if (grid[m+1][n]) {
            count++;
            let val = sink(grid, m+1, n);
            val === true ? boundary = true : count+=val;
        }
    } else {
        boundary = true;
    }
    
    if (n > 0) {
        if (grid[m][n-1]) {
            count++;
            let val = sink(grid, m, n-1);
            val === true ? boundary = true : count+=val;
        }
    } else {
        boundary = true;
    }
    
    if (n < grid[0].length - 1) {
        if (grid[m][n+1]) {
            count++;
            let val = sink(grid, m, n+1);
            val === true ? boundary = true : count+=val;
        }
    } else {
        boundary = true;
    }
    
    if (boundary === true) {
        return true;
    } else {
        return count;
    }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let count = 0;
    for (let m = 0; m < grid.length; m++) {
        for (let n = 0; n < grid[0].length; n++) {
            if (grid[m][n] === 1) {
                let value = sink(grid,m,n);
                console.log(value)
                if (value !== true) {
                    count+=value;
                    count++;
                }
            }
        }
    }
    return count;
};
