function isPalindrome(s) {
  return (s === s.split('').reverse().join(''))
}

function longestPalindrome(s) {
  var word = '';

  for (let i = 0; i < s.length; i++){
      for(let j = i; j < s.length; j++){
          sTemp = s.substring(i, j)
          if(isPalindrome(sTemp) && sTemp.length > word.length){
              word = sTemp
          }
      }
  } 

  return word
}


module.exports = { longestPalindrome }
