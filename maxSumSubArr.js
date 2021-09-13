/*
function maxSumSubArr(arr, k){
    if(arr.length<k) return "invalid";
    let sumArr = [];
    for(let i = 0; i<=arr.length-k; i++){
        sum = 0;
        for(let j = i; j < k+i; j++){
            sum += arr[j];
        }
        sumArr.push(sum);
    }
    return sumArr.sort()[sumArr.length - 1];
}
*/

// A MORE ELEGANT SOLUTION

function maxSumSubArr(arr, k){

    if(arr.length < k) return "invalid";
    
    //FIND THE SUM OF THE FIRST "K" ELEMENTS
    let maxSum = 0;
    for(let i = 0; i<k; i++){
        maxSum += arr[i];
    }

    //CYCLE THRU ARR 1 AT A TIME, ADDING THE LAST EL TO ARR AND REMOVING FIRST EL, COMPARING AND UPDATING THE CURRENT MAX VALUE
    let tempSum = maxSum;
    for(let i = k; i<arr.length; i++){
        tempSum += arr[i];
        tempSum -= arr[i-k];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

module.exports = maxSumSubArr;