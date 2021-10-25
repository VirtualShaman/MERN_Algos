function bubblesort(arr){
    for(j=0;j<arr.length-1;j++){
        for(i=0;i<arr.length-1;i++){
            if (arr[i]>arr[i+1]){
                var temp = 0
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                console.log(arr)
            }
        }
    }
}

function recursivebubblesort(arr, j=0){
    for(i=0;i<arr.length-1;i++){
        if (arr[i]>arr[i+1]){
            var temp = 0
            temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            console.log(arr)
        }
    }
    if(j<arr.length-1){
        j++
        return recursivebubblesort(arr, j)
    }
}

bubblesort([6,4,5,2,9,3,8]) //output: [2,3,4,5,6,8,9]

recursivebubblesort([6,4,5,2,9,3,8]) //output: [2,3,4,5,6,8,9]