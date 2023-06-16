const find_pairs = (nums, targetSum) => {
	const pairs = [];
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (nums[i] + nums[j] === targetSum) {
				pairs.push([nums[i], nums[j]]);
			}
		}
	}
	return pairs;
};
console.log(find_pairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 12));

module.exports = { find_pairs };
