function longestPalindrome(s) {
    // nota: resulta que ya habia resuelto este problema usando c++
    // ¿como lo resolvi en su momento? solo dios y yo sabiamos
    // ahora solo dios sabe
    // so solo lo adapete a .js 
    
    let longest = "", temp = "";
    
    // choose the expansion point 
    for (let i = 0; i < s.length; i++) {
        temp = s[i];
        
        // create the palidrome (odd)
        let j = 1;
        while (i + j < s.length && i - j >= 0) {
            if (s[i - j] != s[i + j]) break;

            temp = s[i - j] + temp + s[i + j];
            j++;
        }

        if (temp.length > longest.length)
            longest = temp;

        // even
        temp = "";
        if (i + 1 < s.length && s[i] == s[i + 1]) {
            temp = s[i] + temp + s[i + 1];
            // cout << temp << endl;
            let j = 1;
            while (i + j + 1 < s.length && i - j >= 0) {
                if (s[i - j] != s[i + j + 1]) break;

                temp = s[i - j] + temp + s[i + j + 1];
                j++;
            }
        }

        if (temp.length > longest.length)
            longest = temp;
    }
    
    return longest; 
}

module.exports = { longestPalindrome };
