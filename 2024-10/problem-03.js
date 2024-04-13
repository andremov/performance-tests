function maxArea(height) {
    let max_area = 0, area; 
    
    let i = 0; j = height.length - 1; 
    
    while (i != j) {
        area = (j - i)*Math.min(height[j], height[i]);
        // console.log(i, j, j - i, Math.min(height[j], height[i]), area);
        
        if (area > max_area) {
            max_area = area; 
        }
        
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max_area; 
}

module.exports = { maxArea };
