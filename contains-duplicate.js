/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
  let result = nums.filter((value, index, arr) => arr.indexOf(value) !== index);
  if (result.length) {
    return true;
  } else {
    return false;
  }
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
