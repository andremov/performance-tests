function waterTrap(height) {
    agua = 0
  
    for (let index = 0; index < height.length; index++) {

        let mayorIzq = Math.max(...height.slice(0,index))

        let mayorDer = Math.max(...height.slice(index,index.length))
        
        agua += (mayorIzq>height[index] && mayorDer>height[index]) ? Math.min(mayorIzq,mayorDer)-height[index] : 0
    }
  
    return agua
}

module.exports = { waterTrap }