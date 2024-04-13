function waterTrap(height) {
    
    
    let max_height = [...height].sort((a, b) => b - a)[0];
    
    let water = 0; 
    
    for (let h = 1; h < max_height; h++) {
        
        let line = "";
        let rain = false; 
        let temp_water = 0;
        
        for (let i = 0; i < height.length; i++) {
            if (height[i] < h) {
                line += "0";
                if (rain) {
                    // console.log("I'm singin' in the rain");
                    temp_water += 1; 
                }
                
            } else {
                line += "1"
                if (!rain) {
                    rain = true; 
                } else {
                    water += temp_water; 
                    temp_water = 0; 
                }
            }
        }
        
        // console.log(h, " ", line, " ", water);
    }
    return water;
};

module.exports = { waterTrap };