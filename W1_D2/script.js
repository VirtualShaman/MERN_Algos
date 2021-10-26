function selectionSort(arr){
    for(i=0; i<arr.length; i++){
        let biggieidx = 0
        let biggie = 0
        for(j=0; j<arr.length-i; j++){
            if(arr[j]>biggie){
                biggieidx=j
                biggie=arr[j]
                console.log(biggie)
            }
            if(j==(arr.length-1)-i){
                let temp = arr[j]
                arr[j] = biggie
                arr[biggieidx] = temp
            }
            console.log(arr)
        }
    }
}

selectionSort([6,4,5,2,9,3,8])