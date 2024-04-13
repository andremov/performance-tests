// JavaScript source code
function expandAroundCenter(s, left, right) {
    let L = left,
        R = right;
    while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
    }
    return R - L - 1;
}

function longestPalindrome(s) {
    if (s.length <= 1) return s;

    let start = 0,
        end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

// Test case
console.time("runtime");
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.timeEnd("runtime");

