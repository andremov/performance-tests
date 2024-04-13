
function isPalindrom (str) {
    return str === str.split('').reverse().join('');
}

function longestPalindrome(s) {
    res = "";
    
    for (let start = 0; start < s.length; start++) {
        for (let end = s.length; end > start; end--) {
            sub = s.substring(start, end);
            
            // console.log(sub, isPalindrom(sub));
            
            if (isPalindrom(sub) && sub.length > res.length)
                res = sub;
        }
    }
    
    return res; 
}

module.exports = { longestPalindrome };
