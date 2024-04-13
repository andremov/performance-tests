function waterTrap(height) {
    agua = 0
  
    for (let index = 0; index < height.length; index++) {

        let mayorIzq = 0
        for (let index2 = 0; index2 < index; index2++) {
            mayorIzq = height[index2]>mayorIzq? height[index2] : mayorIzq
        }

        let mayorDer = 0
        for (let index3 = index; index3 < height.length; index3++) {
            mayorDer = height[index3]>mayorDer ? height[index3] : mayorDer
        }
        
        agua += (mayorIzq>height[index] && mayorDer>height[index]) ? Math.min(mayorIzq,mayorDer)-height[index] : 0
    }
  
    return agua
}

module.exports = { waterTrap };