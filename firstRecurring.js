function firstRec(arr){
    let stack = [];
    for(let i=0; i<arr.length; i++){

        //CHECK FOR ITEM INTHE STACK
        if(stack.includes(arr[i])) return arr[i];

        //PUSH EL INTO STACK
        stack.push(arr[i]);
    }
    return undefined;
    
}

module.exports = firstRec;