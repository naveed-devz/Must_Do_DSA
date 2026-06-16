function subStrings(str){
    const arr = [];
    for(let i=0;i<str.length;i++){
        for (let j=i+1;j<str.length;j++){
            arr.push(str.slice(i,j))
        }
    }
    console.log(arr);

}

console.log(subStrings("abcde"));


// Longest substring without repeating chars
// Flatten object
// Group anagrams
// LRU cache
// Rate limiter
// Debounce/throttle
// Promise.all concept
// Simple CRUD API
// JWT auth middleware
// Pagination API