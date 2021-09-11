//can do with a queue or a stack

function validParenthesis (string) {
    let stackQueue = [];
    for (let i=0; i<string.length; i++){
        switch(string[i]){
            case "{": stackQueue.unshift("}");
                break;
            case "(": stackQueue.unshift(")");
                break;
            case "[": stackQueue.unshift("]");
                break;
            case ")":
            case "]":
            case "}":
                lastEl = stackQueue.shift();
                if (string[i] !== lastEl) return false;
                break;
        }
    }
    return stackQueue.length === 0;
}

module.exports = validParenthesis;