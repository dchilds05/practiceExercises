// Create a hashmap which hashes keys provided and is able to set and get values. Create buckets so that multiple key value pairs can be stored in the same index.

class Hashmap {
    constructor(){
        this.storage = {}
        this.count = 0;
    }

    hashString(string){
        let hashedVal = 0;
        for(let i = 0; i < string.length; i++){
            hashedVal += string.charCodeAt(i);
        }
        return hashedVal;
    }

    set(key, val){
        let index = this.hashString(key);

        if(!this.storage[index]){
            this.storage[index] = {};
            this.count++;
        }
        this.storage[index][key] = val;
    }

    get(key){
        let index = this.hashString(key);
        if(!this.storage[index]) return null;
        if(!this.storage[index][key]) return null;

        return this.storage[index][key];
    }

    size(){
        return this.count;
    }

    has(key){
        let index = this.hashString(key);
        if(!this.storage[index]) return false;
        if(!this.storage[index][key]) return false;
        return true;
    }

    delete(key){
        let index = this.hashString(key)
        if(!this.storage[index]) return null;
        if(!this.storage[index][key]) return null;

        delete this.storage[index][key];
        if(Object.keys(this.storage[index]).length === 0) {
            delete this.storage[index]
            this.count--;
        }
    }

}

let hashmap = new Hashmap();

hashmap.set("dog", "buddy");
hashmap.set("act", "playWrite");
hashmap.set("cat", "kitty");
hashmap.set("pig", "babe");
hashmap.set("horse", "spirit");
hashmap.set("cat", "mittens");
hashmap.set("tac", "tictactoe");
hashmap.delete("dog");
hashmap.set("bird", "polly");
hashmap.set("dirb", "pauline");

console.log(hashmap.storage);
console.log("cat: ",hashmap.get("cat"));
console.log("size: ",hashmap.size());
console.log("has horse: ",hashmap.has("horse"));
console.log("has turtle: ",hashmap.has("turtle"));
console.log("has tac: ",hashmap.has("tac"));