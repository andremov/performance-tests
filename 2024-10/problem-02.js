function invertirString(string) {
  var stringInvertida = []
  stringInvertida = string.split('')
  function sortFunction(value1, value2) {
      return stringInvertida.indexOf(value2 - value1)
  }
  stringInvertida = stringInvertida.sort(sortFunction)
  //console.log(stringInvertida.join(''))
  return stringInvertida.join('')
}


function longestPalindrome(s) {
  var cont  = 0
  while (invertirString(s) !== s) {
     if (cont===0) { 
      s = s.slice(1,s.length) 
      cont = 1 
    } else { 
      s = s.slice(0,s.length-1) 
      cont = 0 
    } 
  }
  return s;
}

console.log(longestPalindrome('cbbd'))
module.exports = { longestPalindrome };
