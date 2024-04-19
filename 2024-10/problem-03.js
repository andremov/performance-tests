function maxArea(height) {
  let maxArea = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
      const currentArea = Math.min(height[left], height[right]) * (right - left)
      maxArea = Math.max(maxArea, currentArea)
      height[left]<height[right] ? left++ : right--
  }

  return maxArea
}
module.exports = { maxArea }