/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let firstHalf = m - 1;
  let lastHalf = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (nums2[lastHalf] === undefined || nums1[firstHalf] >= nums2[lastHalf]) {
      nums1[i] = nums1[firstHalf];
      firstHalf--;
    } else {
      nums1[i] = nums2[lastHalf];
      lastHalf--;
    }
  }
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
