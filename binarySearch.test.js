/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Note:
1. You may assume that all elements in nums are unique.
2. n will be in the range [1, 10000].
3. The value of each element in nums will be in the range [-9999, 9999].
*/

const binarySearch = require("./binarySearch")

it("nums = [-1,0,3,5,9,12]", () => {
    expect(binarySearch([-1,0,3,5,9,12], 9)).toBe(4);
})

it("nums = [-2,1,4,6,10,13]", () => {
    expect(binarySearch([-2,1,4,6,10,13], 2)).toBe(-1);
})

it("nums = [-3,-1,2,7,8,11]", () => {
    expect(binarySearch([-3,-1,2,7,8,11], 11)).toBe(5);
})