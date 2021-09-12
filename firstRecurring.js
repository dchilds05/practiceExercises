function firstRec(arr){
    let stack = [];
    for(let i=0; i<arr.length; i++){
        if(stack.includes(arr[i])) return arr[i];
        stack.push(arr[i]);
    }
    return undefined;
}

module.exports = firstRec;