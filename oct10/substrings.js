let str = "naveed";


// generate all the substrings

function substr(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      res.push(str.substr(i, j));
    }
  }
return res;

}
console.log(substr(str));




