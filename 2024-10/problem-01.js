function waterTrap(height) {
  let n = height.length;
        if (n === 0) {
            return 0;
        }

        let one = new Array(n);
        let two = new Array(n);
        one[0] = height[0];
        for (let i = 1; i < n; i++) {
            one[i] = Math.max(one[i - 1], height[i]);
        }

        two[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            two[i] = Math.max(two[i + 1], height[i]);
        }

        let watha = 0;
        for (let i = 0; i < n; i++) {
            watha += Math.min(one[i], two[i]) - height[i];
        }

        return watha;
};

module.exports = { waterTrap };