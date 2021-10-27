function insertionSort(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let j=i+1
            let holder=j-1
            console.log(i)
            while(arr[j]<arr[j-1]&&j>=0){
                temp=arr[holder]
                arr[holder]=arr[holder+1]
                arr[holder+1]=temp
                j--
                holder--
                console.log(arr)
            }
        }
    }
}

insertionSort([6,4,5,2,9,3,8])