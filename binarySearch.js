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

function binarySearch(arr, target, start = 0, end = arr.length-1){

    // IF ARR IS EMPTY, RETURN -1
    if(start > end) return -1;

    // FIND HALFWAY POINT TO CUT
    let halfIndex = Math.floor((start+end)/2);

    //IF VALUE MATCHES, RETURN IT
    if(arr[halfIndex] === target) return halfIndex;

    //IF VALUE IS TOO SMALL START SEARCH AGAIN, BUT IN THE SECOND HALF
    if (arr[halfIndex] < target) return binarySearch(arr, target, halfIndex + 1, end);

    //IF VALUE IS TOO BIG START SEARCH AGAIN, BUT IN THE FIRST HALF
    else return binarySearch(arr, target, start, halfIndex - 1);
}

module.exports = binarySearch;