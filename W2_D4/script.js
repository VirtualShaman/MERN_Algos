//encode--> given a string with repeating consecuctive characters, give a number for each number of repeats next to the letter
//example ---> aaabccccdd -> a3b1c3d2
const encode = (str)=>{
    let output = ""
    let num = 1
    for(i=0;i<str.length;i++){
        if(str[i]==str[i+1]){
            num++
        } else {
            output+=str[i]+num
            num = 1
        }
    }
    return output
}

console.log(encode("aaabccccdd")) //a3b1c4d2


//decode--> given an encoded string, decode it
//example ---> a2b3c1---> aabbbc

const decode = (str)=>{
    let output = ""
    for(i=0;i<str.length;i++){
        if(isNaN(str[i])==true){
            output+=str[i]
        }
        let num = str[i+1]
        while(num>1){
            output+=str[i]
            num--
        }
    }
    return output
}

console.log(decode("a2b3c1")) //aabbbc