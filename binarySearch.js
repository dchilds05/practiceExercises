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

function binarySearch(arr, target){
    console.log("arr: ", arr);
    if(arr.length===1) return 0;
    arr.sort();
    let halfIndex = Math.ceil(arr.length/2);
    console.log("halfIndex: ", halfIndex);
    if(arr[halfIndex] === target) return halfIndex;
    else if (arr[halfIndex] < target) {
        //RERUN WITH FIRST HALF
        let newArr = (arr.splice(0 , halfIndex));
        binarySearch(newArr, target);
    }
    else {
        //RERUN WITH SECOND HALF
        let newArr = (arr.splice(halfIndex-1 , arr.length - halfIndex + 1));
        binarySearch(newArr, target);
    }
}

module.exports = binarySearch;