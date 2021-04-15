/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results = [];
    let dfs = function(numl, lst) {
        let len = numl.length;
        if (len === 0) {
            results.push(lst);
            return;
        }
        for (var i = 0; i < len; i++) {
            let newNuml = [...numl];
            newNuml.splice(i,1);
            let newLst = [...lst];
            newLst.push(numl[i])
            dfs(newNuml,newLst); // recursive dfs
        }
    }
    dfs(nums, []);
    return results;
};
