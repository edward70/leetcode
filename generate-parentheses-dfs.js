let dfs = (n, i, str, results) => {
    let possible = [];
    possible.push("()"+str); // prepend
    possible.push(str+"()"); // append
    let matches = str.matchAll("()");
    for (var match of matches) {
        possible.push(str.substring(0, match.index+1)+"()"+str.substring(match.index+1,str.length)); // insert
    }
    possible = [...new Set(possible)]; // remove duplicates
    for (var item of possible) {
        if (i === n) {
            if (!results.includes(item)) {
                results.push(item);
            }
        } else {
            dfs(n, i+1, item, results);
        }
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let results = [];
    dfs(n, 1, "", results)
    return results;
};
