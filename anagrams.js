function anagramChecker(word1, word2){

    let formatted1 = word1.replace(/[^\w]/g, "").toLowerCase().split("");
    let formatted2 = word2.replace(/[^\w]/g, "").toLowerCase().split("");

    for(let i=0; i<formatted2.length; i++){
        if(formatted1.includes(formatted2[i])) formatted1.splice(formatted1.indexOf(formatted2[i]), 1)
        else formatted1.push(1);
    }

    return !formatted1.length;
}


module.exports = anagramChecker;