/*
function findFirst(str){
    if (str.length===0) return null;
    let arr = str.split("");
    arr.sort();
    for(let i=0; i<arr.length; i++){
        let temp = null;
        if(arr[i]===temp){
            arr.splice(i,1);
            i--;
        }
        else if (arr[i]===arr[i+1]){
            let temp = arr[i];
            arr.splice(i,2);
            i--;
        }
    }
    if(arr.length===0) return null;
    for(let i=0; i<str.length; i++){
        if(arr.includes(str[i])) return str[i];
    }
}
*/

//MORE ELEGANT SOLUTION

function findFirst(str){

    for(let i = 0; i<str.length; i++){
        let char = str[i];

        //IF CHAR EXISTS AT i AND THERE IS NO OCCURENCE OF CHAR STARTING AFTER i
        if( str.indexOf(char) == i && str.indexOf(char, i + 1) == -1 ) return char;
    }
    return null;

}

module.exports = findFirst;