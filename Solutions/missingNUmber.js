console.log(findMissing([1, 2, 4, 5]));

function findMissing(arr){
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
}