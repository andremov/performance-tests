function waterTrap(height) {
  let n = height.length;
        if (n === 0) {
            return 0;
        }

        let left = new Array(n);
        let right = new Array(n);

        // Fill left array
        left[0] = height[0];
        for (let i = 1; i < n; i++) {
            left[i] = Math.max(left[i - 1], height[i]);
        }

        // Fill right array
        right[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            right[i] = Math.max(right[i + 1], height[i]);
        }

        // Calculate trapped water
        let trappedWater = 0;
        for (let i = 0; i < n; i++) {
            trappedWater += Math.min(left[i], right[i]) - height[i];
        }

        return trappedWater;
};

module.exports = { waterTrap };