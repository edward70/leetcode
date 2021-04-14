// stop laughing at my code lol
let dfs = function(nums, arr, n, results) {
    if (nums.length === 0) {
        if (!results.some((x)=>x.toString()===arr.toString())) {
            results.push(arr);
        }
        return;
    }
    if (n === 0) {
        results.push([]);
    }
    for (var i of nums) {
        let newArr = arr.concat([i]).sort();
        if (!results.some((x)=>x.toString()===newArr.toString())) {
            results.push(newArr);
            dfs(nums.filter((x)=>x!==i), newArr, n+1, results);
        }
    }
}
/*** @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = [];
    dfs(nums, [], 0, results);
    return results;
};
