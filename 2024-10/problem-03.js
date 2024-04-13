function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const currentArea = minHeight * (right - left);
    maxArea = Math.max(maxArea, currentArea);

    // Move the pointer pointing to the shorter vertical line inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
