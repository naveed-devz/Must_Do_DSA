function longestSubstr(str){
    let left  = 0;
    let maxLen = 0;
    let seen = new Set();

    for(let right =0;right<str.length;right++){
        while(seen.has(s[right])){
            seen.delete(s[left])
            left++
        }
        seen.add(s[riight])
        maxLen = Math.max(maxLen,right-left+1)
    }
    return maxLen;    
}
console.log(longestSubstr("abcabcbb"));