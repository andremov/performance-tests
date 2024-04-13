function waterTrap(heights) {
  if (!heights || heights.length === 0) {
      return 0
  }

  let left = 0
  let right = heights.length - 1
  let leftMax = 0
  let rightMax = 0
  let waterTrapped = 0

  while (left < right) {
      if (heights[left] <= heights[right]) {
          if (heights[left] >= leftMax) {
              leftMax = heights[left]
          } else {
              waterTrapped += leftMax - heights[left]
          }
          left++
      } else {
          if (heights[right] >= rightMax) {
              rightMax = heights[right]
          } else {
              waterTrapped += rightMax - heights[right]
          }
          right--
      }
    }
  return waterTrapped
}


console.log(waterTrap([0,1,0,2,1,0,1,3,2,1,2,1]));

module.exports = { waterTrap }