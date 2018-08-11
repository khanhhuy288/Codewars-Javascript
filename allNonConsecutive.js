function allNonConsecutive (arr) {
  	var nums = arr.filter((e, i) => e - arr[i - 1] > 1);
  	var res = [];
  	for (var i = 0; i < nums.length; i++) {
  		res.push({i: arr.indexOf(nums[i]), n: nums[i]});
  	}
  	return res;
}

console.log(allNonConsecutive([1,2,3,4,6,7,8,10]));		// [{i: 4, n:6}, {i: 7, n:10}]