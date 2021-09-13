function anagramChecker(word1, word2){

    //REMOVE THE SPECIAL CHARS
    let formatted1 = word1.replace(/[^\w]/g, "").toLowerCase().split("");
    let formatted2 = word2.replace(/[^\w]/g, "").toLowerCase().split("");

    //REMOVE FROM ARR1 ALL OF THE CHARS PRESENT IN ARR2
    for(let i=0; i<formatted2.length; i++){
        if(formatted1.includes(formatted2[i])) formatted1.splice(formatted1.indexOf(formatted2[i]), 1)
        //IF ARR2 MATCHES ARR1 BUT HAS HAS EXTRA CHARS, THIS WILL THROW A NEG RESULT
        else formatted1.push(1);
    }
    //IF ARR IS EMPTY, THEY ARE ANAGRAMS!
    return !formatted1.length;
}


module.exports = anagramChecker;