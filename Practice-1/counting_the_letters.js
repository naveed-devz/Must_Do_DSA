// function find_count(str){

//     let obj={}
//     for(let i=0;i<str.length;i++){
//         if(obj[str[i]] == undefined){
//             obj[str[i]] = 1
//         }

//         else{
//             let prev= obj[str[i]]
//             obj[str[i]] = prev+1
//         }
//     }

//     console.log(obj)

// }
function find_count(str){
    let freq = {};
    for(let char of str){
        freq[char] = (freq[char] || 0) + 1
    }
    return freq;
}

console.log(find_count("naveed"))