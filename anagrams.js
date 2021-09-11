function anagramChecker(word1, word2){
    function removeSpecial(word){
        let wordArr=word.split("");
        let specialChars = `"/^[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]*/$ 1234567890`
        for(let i=0; i<wordArr.length; i++){
            if (specialChars.includes(wordArr[i])) {
                wordArr.splice(i,1);
                i--;
            }
            else wordArr[i] = wordArr[i].toLowerCase();
        }
        return wordArr;
    }

    let formatted1 = removeSpecial(word1);
    let formatted2 = removeSpecial(word2);

    for(let i=0; i<formatted2.length; i++){
        if(formatted1.includes(formatted2[i])) formatted1.splice(formatted1.indexOf(formatted2[i]), 1)
        else formatted1.push(1);
    }

    if(!formatted1.length) return true;
    else return false;
}


module.exports = anagramChecker;