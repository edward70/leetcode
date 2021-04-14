let dfs = function(mapping, digits, string, result) {
    if (digits.length === 0) {
        if (string !== "") {
            result.push(string);
        }
        return;
    }
    let digit = parseInt(digits[0]);
    let letters = mapping[digit];
    for (var letter of letters) {
        dfs(mapping, digits.substring(1, digits.length), string+letter, result)
    }
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let results = [];
    dfs(mapping, digits, "", results)
    return results;
};
