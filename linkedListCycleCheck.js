// INITIALIZE CLASS
class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

// MAP TO KEEP TRACK OF WHICH NODES EXIST
var myMap = new Map();
var flag;

// FUNCTION FOR USING CLASS TO CREATE NEW NODES
function newNode(d){
    var temp = new Node();
    temp.data = d;
    temp.next = null;
    myMap.set(temp, true);
    return temp;
}

// USE SPECIFIC NODE TO START THE CHECK FOR A CYCLICALLY-LINKED LIST
function checkListForCycle(currentNode){
    console.log("myMap: ", myMap);
    // IF THE CURRENT NODE IS EMPTY, RETURN FALSE
    if (currentNode == null){
        flag = false;
        return;
    }

    // IF THE NODE EXISTS BUT ISN'T IN THE MAP, ADD IT 
    if(!myMap.has(currentNode)){
        myMap.set(currentNode, true);
        checkListForCycle(currentNode.next);
    }

    //IF KEY IS ALREADY THERE, LIST IS CYCLICAL!
    else{
        flag = true;
        return;
    }
    if(flag) console.log("loop detected.");
    else console.log("no loop detected");
}

function print(map){
    console.log(Object.keys(map));
    Object.keys(map).forEach(key => {
        console.log(key,map[key]);
    })
}

var head = newNode(20);

head.next = newNode(4);
head.next.next = newNode(5);
head.next.next.next = newNode(10);

head.next.next.next.next = head;

//console.log(checkListForCycle(head));



print(myMap);

