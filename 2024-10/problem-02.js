/**
 * @param {string} s
 * @return {string}
 */

var isPalindrome = function(s) {

  if (s == s.split('').reverse().join('')){
      return true;
  } else {
      return false;
  }

};

var longestPalindrome = function(s) {
  let word = '';
  for (let i = 0; i < s.length; i++){
      for(let j = i; j < s.length; j++){
          if (isPalindrome(s.substring(i, j))){
              if (s.substring(i, j).length > word.length){
                  word = s.substring(i, j);
              };
          };
      };
  };

  return word
};

console.log(longestPalindrome("cbbd"))

module.exports = { longestPalindrome };
