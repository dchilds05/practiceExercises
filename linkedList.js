function makeNode (value) {
    return {
        value: value,
        next: null
    }
}

class List {

    constructor() {
        this.head = null;
        this.tail = null
    }

    append(value) {
        let node = makeNode(value)
        if(!this.tail) this.head = this.tail = node;
        else {
            this.tail.next = node;
            this.tail = node;
        }
        return node;
        
    }

    prepend(value){
        let node = makeNode(value);
        if(!this.head) this.head = this.tail = node;
        else{
            this.head.next = this.head;
            this.head = node;
        }
        return node;
    }

    print(){
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    shift(){
        if(!this.head) return null;
        else{
            let oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = null;
            if(oldHead === this.tail){
                this.tail = null;
            }
            return oldHead;
        }
    }

    pop(){
        if(!this.tail) return null
        else{
            let oldTail = this.tail;
            let nodeBefore = this.findNodeBefore(this.tail);

            nodeBefore.next = null;

            oldTail.next = null;

            if(oldTail===this.head){
                this.head = null;
            }
            return oldTail;
        }
        
    }

    findNodeBefore(node){
        if(!node) return null;
        else if(node===this.head) return null;
        else {
            let current = this.head;
            while(current){
                if(current.next===node){
                    break;
                }
                else current = current.next;
            }
            return current;
        }
    }

    getLength() {
        let current = this.head;
        let count = 0;
        while(current) {
          count++;
          current = current.next;
        }
        return count;
      }

    insert(value, asIndex) {
        let previous = null;
        let current = this.head;
        let currentIndex = 0;

        // If the index is 0, negative, or falsy
        // we'll insert the node at the front
        if(asIndex <= 0 || !asIndex) {
            // oh hey, we have a function for this!
            return this.prepend(value);
        }

        // If the index is at or past the end, insert this
        // new node at the end
        if(asIndex >= this.length) {
            return this.append(value);
        }

        // create a new node to insert
        let node = makeNode(value);

        // Walk through the list, looking for a place to put it.
        // Keep track of the `previous` node; we'll need it soon.
        while(current && currentIndex !== asIndex) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        // When we're done, `current` points at the
        // node that currently holds the `currentIndex` place,
        // and `previous` is the node before it. We need both,
        // so that we can insert ours in the middle.
        previous.next = node;
        node.next = current;

        // We added a node! Keep the length up to date.
        this.length++;

        return node;
    }
    
    remove(index) {
        // If the index is out of range, just return null
        if(index < 0 || index >= this.length) {
          return null;
        }
    
        // Use our existing function if this is
        // the first node, rather than handling the
        // special case of previous===null below
        if(index === 0) {
          return this.removeFirst();
        }
    
        // Start at the beginning
        let current = this.head;
        let previous = null;
        let currentIndex = 0;
    
        // Walk along the list, keeping track of the `previous`
        // We'll need it to re-link everything
        while(current && currentIndex !== index) {
          previous = current;
          current = current.next;
          currentIndex++;
        }
    
        // Link up the before & after nodes
        previous.next = current.next;
    
        // Unlink this node by wiping out its `next`
        current.next = null;
        return current;
      }
}

let test = new List();
console.log("with contents:");
test.append("t");
test.append("e");
test.append("s");
test.append("t");
test.print();
console.log("then, after popping:");
test.pop();
test.print();
