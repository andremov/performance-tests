// JavaScript source code
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const area = minHeight * (right - left);
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Test case
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
