// backtracking
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n===1) return ["()"];
    
    let solutions = [];
    let dfs = function(str, left, right) {
        if (str.length === n*2) {
            solutions.push(str);
            return;
        }
        if (left < n) dfs(str+"(",left+1,right);
        if (right < left) dfs(str+")",left,right+1);
    }
    
    dfs("", 0, 0);
    return solutions;
};
