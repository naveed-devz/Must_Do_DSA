let arr = [2,1,5,1,3,2]
let k =3;

/** 
 * 2 1 5 = 8
 * 1 5 1 = 7
 * 5 1 3 = 9
 * 1 3 2 = 6
 **/
// ans = 5 1 3

function windowSum(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // 1️⃣ initial window sum
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  // IMPORTANT: set initial max
  maxSum = windowSum;

  // 2️⃣ slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(windowSum(arr, k));


// first keep the sum =0; windowsum=0
// since we are using window here make the sum of the intial window
// check the length from the size k
// get the sum using arr[i] - arr[i-k];
// return the sum