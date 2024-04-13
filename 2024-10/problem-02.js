function longestPalindrome(s) {
    const n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    let start = 0;
    let maxLength = 1;

    // All substrings of length 1 are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Check for substrings of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // Check for substrings of length >= 3
    for (let length = 3; length <= n; length++) {
        for (let i = 0; i < n - length + 1; i++) {
            let j = i + length - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (length > maxLength) {
                    start = i;
                    maxLength = length;
                }
            }
        }
    }

    return s.substr(start, maxLength);
}

module.exports = {longestPalindrome}
// Example usage:
//const s = "babad";
//console.log(longestPalindrome(s));  // Output: "bab" or "aba"
