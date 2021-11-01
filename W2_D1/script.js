//given a string that can be a sentence, put each word into an array
let sentence = "Hi everybody, welcome to week two!"

const stringToWordArr = (input)=>{
    let holder = ""
    let arrSentence = []
    for (i=0;i<input.length;i++){
        if(i==input.length-1){
            if(input[i]!="."&&input[i]!="!"&&input[i]!="?"){
                holder+=input[i]
                arrSentence.push(holder)
                return arrSentence
            }
            else{
                arrSentence.push(holder)
                return arrSentence
            }
        }
        else if(input[i]!=" "&&input[i]!=","){
            holder+=input[i]
        }
        else if(input[i]==" "){
            arrSentence.push(holder)
            holder = ""
        }
    }
}



console.log(stringToWordArr(sentence)) //["Hi", "everybody," , "welcome", "to", "week", "two"]