// CREATE NEW - new Map([]);
// ADD NEW KEY VALUE PAIR - hashmap.set(key, value);
// RETURN VALUE - hashmap.get(key);
// SIZE - hashmap.size;
// CHECK TO SEE IF EXISTS - hashmap.has(key);
// DELETE PAIR - hashmap.delete(key);
// CLEAR MAP - hashmap.clear();


/* FOR OF LOOP TO ITERATE OVER KEYS OR VALUES

console.log("pairs");
for (el of hashmap) {
    console.log(el);
}

console.log("keys");
for (el of hashmap) {
    console.log(el[0]);
}

console.log("values");
for (el of hashmap) {
    console.log(el[1]);
}
*/

let hashmap = new Map([
    [1,{previous: null, next: 2}],
    [3,{previous: 5, next: 4}],
    [2,{previous: 1, next: 5}],
    [5,{previous: 2, next: 3}],
    [4,{previous: 3, next: null}]
]);

console.log("hashmap: ", hashmap);


//let head = 1;

//ADD NEW ITEM TO THE END OF THE LINKED LIST

function addPair(head, key, value){
    if(!hashmap.get(head).next) {
        let tailKey = head;
        let tailVal = head + 1;
        hashmap.set(tailKey, tailVal);
        return;
    }
    else {
        let currentVal = hashmap.get(head);
        addPair(currentVal, key, value);
    }
}

addPair(5,6);


// ITERATE THROUGH ALL OF THE ELEMENTS IN A LINKED LIST

function showElements(map, node){
    if(!map.get(node)) return;
    let currentVal = map.get(node);
    console.log([node, currentVal]);
    showElements(map, currentVal);
}

//showElements(hashmap, "head");


// ITERATE OVER LINKED LIST IN REVERSE ORDER OF ENTRY
/*
function reverseList(map){
    let stack = [];
    for (el of map){
        stack.push(el);
    }
    for(let i = stack.length-1; i > -1; i--){
        console.log(stack[i]);
    }
}

reverseList(hashmap);
*/

// ITERATE OVER LINKED LIST IN REVERSE LIST ORDER
/*
function reverseOrder(map, node){
    let stack = [];
    function listElements(map, node){
        if(!map.get(node)) return;
        let currentVal = map.get(node);
        stack.push([node, currentVal]);
        listElements(map, currentVal);
    }
    listElements(map, node);
    for(let i = stack.length-1; i > -1; i--){
        console.log(stack[i]);
    }
}

reverseOrder(hashmap, "head");
*/


// INSERT SPECIFIED ELEMENT AT SPECIFIED POSITION
/*
function insertAt(map, key, position){
    let linkedList = [];
    function list(map, head){
        if(!map.get(head)) return;
        let currentVal = map.get(head);
        linkedList.push([head, currentVal]);
        list(map, currentVal);
    }
    list(hashmap, head);

    if(position !== 1) map.set(linkedList[position-2][0], key);
    if(position === (map.size + 1)) map.set(key, null);
    else map.set(key, linkedList[position-1][0]);
    if (position === 1) head = key;

    showElements(map, head);
}

insertAt(hashmap, 14, 5);
*/




