function longestPalindrome(s) {
  if (!s || s.length === 0) {
    return '';
  }
  const n = s.length;
  let maxLength = 1;
  let start = 0;

  // Initialize dp table
  const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      maxLength = 2;
      start = i;
    }
  }

  // Check for substrings of length > 2
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        if (len > maxLength) {
          maxLength = len;
          start = i;
        }
      }
    }
  }
  return s.substring(start, start + maxLength);
}

module.exports = { longestPalindrome };
