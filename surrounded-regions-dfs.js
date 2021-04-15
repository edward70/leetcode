// weird

let sink = function(board, m, n, bdr) {
    board[m][n] = "p"; // set to p in board (for in process)
    
    let check = function(a,b) {
        return board[a][b] === "O";
    }
    
    if (m > 0) {
        if (check(m-1, n)) {
            bdr = sink(board,m-1,n,bdr) ? true : bdr;
        }
    } else {
        bdr = true;
    }
    
    if (m < board.length - 1) {
        if (check(m+1, n)) {
            bdr = sink(board,m+1,n,bdr) ? true : bdr;
        }
    } else {
        bdr = true;
    }
    
    if (n > 0) {
        if (check(m, n-1)) {
            bdr = sink(board,m,n-1,bdr) ? true : bdr;
        }
    } else {
        bdr = true;
    }
    
    if (n < board[0].length - 1) {
        if (check(m, n+1)) {
            bdr = sink(board,m,n+1,bdr) ? true : bdr;
        }
    } else {
        bdr = true;
    }

    return bdr;
}

let reflip = function(board, m, n, to) {
    for (let m = 0; m < board.length; m++) {
        for (let n = 0; n < board[0].length; n++) {
            if (board[m][n] === "p") {
                board[m][n] = to;
            }
        }
    }
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    for (let m = 0; m < board.length; m++) {
        for (let n = 0; n < board[0].length; n++) {
            if (board[m][n] === "O") {
                let border = sink(board, m, n, false);
                reflip(board,m,n,(border?"O":"X"))
            }
        }
    }
};
