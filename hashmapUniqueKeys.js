// Create a hashmap which hashes keys provided and is able to set and get values.

class Hashmap {
    constructor(){
        this.storage = {}
    }

    hashString(string){
        let hashVal = 0;
        for(let i = 0; i < string.length; i++){
            hashVal += string.charCodeAt(i);
        }
        return hashVal;
    }

    set(key, value){
        let index = this.hashString(key);
        this.storage[index] = [key, value];
    }

    get(key){
        let index = this.hashString(key);
        if(!this.storage[index]) return null;
        return this.storage[index][1];
    }

}

let hashmap = new Hashmap();

hashmap.set("dog", "buddy");
hashmap.set("cat", "kitty");
hashmap.set("pig", "babe");
hashmap.set("horse", "spirit");
hashmap.set("cat", "mittens");

console.log(hashmap.storage);
