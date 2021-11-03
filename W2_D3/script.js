//instructions: Given a string, create a function that returns to you a new array containing only the latest instance of each letter from the sentence, without any duplicates. Make it case sensitive first so 'S' and 's' are not considered duplicates

function dedupeStr(str){
    let result = []
    for(i=0;i<str.length;i++){
        let finder = result.indexOf(str[i])
        result.push(str[i]);
        console.log(result)
        if(finder>-1){
            result.splice(finder, 1)
        }
    }
    return result
}

console.log(dedupeStr("Snaps! crackles! pops!"))// ['S', 'n', 'r', 'a', 'c', 'k', 'l', 'e', ' ', 'o', 'p', 's', '!' ]