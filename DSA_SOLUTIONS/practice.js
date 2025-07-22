function sumofUnsorted(arr, target) {
  let newArr = arr.map((value, index) => ({ value, index }));
  newArr.sort((a, b) => a.value - b.value);
  let left = 0;
  let right = newArr.length - 1;

  while (left < right) {
    let sum = newArr[left].value + newArr[right].value;
    if (sum === target) {
      return [newArr[left].index, newArr[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
const arr = [4, 1, 9, 7],
  target = 10;

console.log(sumofUnsorted(arr, target));
