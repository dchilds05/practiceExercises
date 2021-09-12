function findFirst(str){
    if (str.length===0) return null;
    let arr = str.split("");
    arr.sort();
    console.log("sortedArr: ", arr);
    
    for(let i=0; i<arr.length; i++){
        let temp = null;
        if(arr[i]===temp){
            console.log("first loop, i:", i, "arr[i]:", arr[i], "arr:", arr);
            arr.splice(i,1);
            i--;
        }
        else if (arr[i]===arr[i+1]){
            console.log("second loop, i:", i, "arr[i]:", arr[i], "arr:", arr);
            let temp = arr[i];
            arr.splice(i,2);
            i--;
        }
    }

    console.log("onlySingleArr: ", arr);
    if(arr.length===0) return null;
    for(let i=0; i<str.length; i++){
        if(arr.includes(str[i])) return str[i];
    }
}


module.exports = findFirst;