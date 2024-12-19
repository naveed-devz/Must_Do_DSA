let nums = [1,2,4,6]

function product(nums){
    let mul = 1;
    let arr = []
    for(let i=0;i<nums.length;i++){
         arr.push((mul*=nums[i])/nums[i])
    }
    return arr
}
console.log(product(nums))