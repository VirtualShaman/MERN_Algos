const dec2hex = (num)=>{
    let converter = ["A","B","C","D","E","F"]
    let solution=""
    let tempNum = num
    while(tempNum!="finished"){
        let placeholder = tempNum % 16
        if(placeholder>9&&placeholder<16){
            solution = converter[placeholder-10]+solution
        } else{
            solution = placeholder+solution
        }
        console.log(solution)
        tempNum=tempNum/16
        tempNum=Math.floor(tempNum)
        console.log(tempNum)
        if(tempNum>9&&tempNum<16){
            solution = converter[tempNum-9]+solution
            tempNum="finished"
        } else if(tempNum>0&&tempNum<10){
            solution=tempNum+solution
            tempNum="finished"
        } else if(tempNum==0) {
            solution=0+solution
            tempNum="finished"
        }
    }
    return solution
}

//https://www.rapidtables.com/convert/number/decimal-to-hex.html


console.log(dec2hex(7562))//1D8A
console.log(dec2hex(8000))//1F40