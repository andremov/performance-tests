function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    console.log("🚀 ~ maxArea ~ right:", right)
    console.log("🚀 ~ maxArea ~ left:", left)
    const minHeight = Math.min(height[left], height[right]);
   
    maxArea = Math.max(maxArea, minHeight * (right - left));
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49

