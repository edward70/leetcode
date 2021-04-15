// cleaner but still suboptimal
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) { 
    if (n === 1) return ["()"];
  
    let solutions = [];
    let dfs = function(str) {
        let strLen = str.length;
        if (strLen === n * 2) { // check if all parens have been used
            if (!solutions.includes(str)) solutions.push(str);
            return;
        }
      
        for (let i = 0; i < strLen; i++) {
            if (str[i] === "(" && str[i+1] === ")") {
              let prepend = str.substring(0,i) + "()" + str.substring(i, strLen);
              let append = str.substring(0,i+2) + "()" + str.substring(i+2,strLen);
              let enclose = str.substring(0,i+1)+"()"+str.substring(i+1,strLen);
              if (prepend === append) {
                dfs(prepend);
                dfs(enclose);
              } else {
                dfs(prepend);
                dfs(append);
                dfs(enclose);
              }
            }
        }
    }
    
    dfs("()");
    return solutions;
};
