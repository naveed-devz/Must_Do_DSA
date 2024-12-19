// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.



let  arr = [1,2,2,3,3,3], k = 2

// Output: [2,3]


function TopKFreq(arr,k){
    let obj = {};

    for(let num of arr){
        if(obj[num]){

            obj[num] = obj[num] + 1
        }
        else{
            obj[num] = 1
        }
    }
   const sortedKeys = Object.keys(obj).sort((a,b)=> obj[b] - obj[a])

   return sortedKeys.slice(0,k).map(Number);

}

console.log(TopKFreq(arr,2))