//Write a function that accepts an integer and outputs the binary version of that integer


//https://www.rapidtables.com/convert/number/decimal-to-binary.html

const dec2binary = (num)=>{
    let conversion=""
    let tempNum = num
    while(tempNum!=0){
        conversion = tempNum % 2 + conversion
        console.log(conversion)
        tempNum=tempNum/2
        tempNum=Math.floor(tempNum)
        console.log(tempNum)
        if(tempNum==1){
            conversion=1+conversion
            tempNum=0
        } else if(tempNum==0) {
            conversion=0+conversion
        }
    }
    return conversion
}



console.log(dec2binary(58))//111010