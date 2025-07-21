// const arr = [1, 2, 3, 4, 6], target = 6 
// function sortedArrSum(arr,target){
//     let left = 0;
//     let right = arr.length -1;
//     while(left<right){
//         if(arr[left] + arr[right] === target){
//             return [left,right]
//         }else if(arr[left] + arr[right] < target){
//             left ++
//         }else{
//             right --
//         }
//     }
// }
// console.log(sortedArrSum(arr,target))


const arr = [4, 1, 9, 7], target = 10

function sumofUnsorted(arr,target){
    let numWithIndices = arr.map((num,index)=>({num,index}))
    numWithIndices.sort((a,b) => a.num - b.num)
    let left = 0;
    let right = numWithIndices.length-1;
    while(left < right){
        let sum = numWithIndices[left].num + numWithIndices[right].num;
        if(sum === target){
            return [numWithIndices[left].index,numWithIndices[right].index] 
        }
        else if(sum < target){
            left++
        }
        else right--
    }
    return []
}
console.log(sumofUnsorted(arr,target))
