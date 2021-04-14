let dfs = (candidates, target, currentList, results) => {
    if (currentList.length >= 2) {
        var total = currentList.reduce((x,y)=>x+y);
    } else if (currentList.length === 1) {
        var total = currentList[0];
    } else {
        var total = 0;
    }
    for (let i of candidates) {
        if (total+i === target) {
            let finalList = currentList.concat([i]).sort();
            let unique = true;
            for (var result of results) {
                if (result.toString() === finalList.toString()) {
                    unique = false;
                }
            }
            if (unique) {
                results.push(finalList);
            }
        } else if (total+i < target) {
            dfs(candidates, target, currentList.concat([i]), results)
        }
        // ignore if greater than target
    }
}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results = [];
    dfs(candidates, target, [], results)
    return results;
};
