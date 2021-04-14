let dfs = (nums, currentList, results) => {
    if (nums.length === 0) {
        results.push(currentList);
        return;
    }
    for (var item of nums) {
        dfs(nums.filter((i)=>i!==item), currentList.concat(item), results)
    }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results = [];
    dfs(nums, [], results)
    return results;
};
