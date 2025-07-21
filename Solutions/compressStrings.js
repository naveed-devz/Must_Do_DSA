function compressString(s) {
  let count = 1;
  let result = "";
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      result += count + s[i - 1];
      count = 1;
    }
  }
  return result;
}

console.log(compressString("aaabbcc"));
//output 3a2b2c
