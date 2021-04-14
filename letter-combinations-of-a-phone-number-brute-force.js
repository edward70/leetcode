// recursive brute force solution
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    let mapping = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let digit = parseInt(digits[0]);
    let letters = mapping[digit-2];
    let combos = [];
    for (let letter of letters) {
        if (digits.length === 1) {
            combos.push(letter);
        } else {
            for (let combo of letterCombinations(digits.substring(1,digits.length))) {
                combos.push(letter+combo);
            }
        }
    }
    return combos;
};
