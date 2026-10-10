const arr = [4, 1, 9, 7], target = 100


function unsortedSum(arr,target){

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return [i,j]
            }
        }
    }
return [-1,-1]
}   

console.log(unsortedSum(arr,target))