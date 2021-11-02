//rotate string--> given a string and a number, return a string that is the rotated version of the original by x number of characters


function rotateString(str,num){
    newStr=str
    for(i=0;i<num;i++){
        let result = ""
        result+=newStr[newStr.length-1]
        for(j=0;j<newStr.length-1;j++){
            result+=newStr[j]
        }
        newStr=result
        console.log(result)
    }

}


rotateString("hello", 2) //"lohel"
    //1st rotation- ohell
    //2nd rotation- lohel
rotateString("steph curry is best shooter of all time", 4) //"timesteph curry is best shooter of all"
    //1st rotation - "esteph curry is best shooter of all tim"
    //2nd rotation - "mesteph curry is best shooter of all ti"
    //3rd rotation - "imesteph curry is best shooter of all t"
    //4th rotation - "timesteph curry is best shooter of all "


rotateString("them roots tho", 6)



//bonus- isRotation-->given two strings, return a boolean on if they are rotations of one another
function isRotation(str1, str2){
    let checker=""
    for(i=0;i<str1.length;i++){
        for(j=0;j<str2.length;j++){
            if(checker[i]==null){
                if(str1[i]==str2[j]){
                    checker+=str2[j]
                }
                else if(checker[i]!=str1[i]&&j==str2.length-1){
                    return false
                }
            }
        }
    }
    if(checker===str1){
        return true
    }
    else{
        return "Something is broken"
    }
}

console.log(isRotation("hello", "lohel")) //true
console.log(isRotation("abcd", "dacc")) //false