//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []
//Ex: given [-9, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7] and [-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7] return [1,4,4,7]

const intersect = (arrLeft, arrRight) => {
    let result = [];
    for(i=0;i<arrLeft.length;i++){
        for(j=0;j<arrRight.length;j++){
            if(result[i]==arrLeft[i]){
                break
            }
            else if(arrLeft[i]==arrRight[j]){
                result.push(arrLeft[i])
            }
        }
    }
    return result
}

// console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
// console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
console.log(intersect([-9, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7], [-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7]));

//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const union = (arrLeft, arrRight) => {
    
}

// console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(union([1,2,2,2,7],[2,2,6,6,7]));
// console.log(union([1,5,9],[2,6,10]));
// console.log(union([2,6,10],[1,5,9]));