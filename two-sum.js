/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let addTargetValue = nums[i] + nums[j];
      if (target == addTargetValue) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

twoSum([2, 7, 11, 15], 9);
