

const arr = [2,7,11,15]

let target = 9

// o/p = [0,1]

function twoSum(arr,target){

let left = 0;
let right = arr.length-1;
while(left<right){

    let sum = arr[left] + arr[right]
    if(sum === target){
        return [left,right]
    }

    else if(sum<target){
        left++
    }

    else{
        right --
    }

}

return [-1,-1]

}


console.log(twoSum(arr,target));


