function longestPalindrome(s) {
  let n = s.length;
  let dp = Array(n).fill(false).map(() => Array(n).fill(false));
  let left = 0, right = 0;

  for (let i = 0; i < n; i++) {
      dp[i][i] = true;
  }

  for (let j = 0; j < n; j++) {
      for (let i = 0; i < j; i++) {
          let isInnerWordPalindrome = j - i > 2 ? dp[i + 1][j - 1] : true;

          if (s[i] === s[j] && isInnerWordPalindrome) {
              dp[i][j] = true;

              if (j - i > right - left) {
                  left = i;
                  right = j;
              }
          }
      }
  }

  return s.slice(left, right + 1);
}

module.exports = { longestPalindrome };

console.log(longestPalindrome('babad')); // 'bab'