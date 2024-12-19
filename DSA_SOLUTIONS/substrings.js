function generateSubstr(str){
    let substr=[];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            if(str[j] !== str[j+1] || str[j] !== str[j-1]){
                substr.push(str.slice(i,j))
            }
        }
    }
    return substr;
}

const str = "naveed";
console.log(generateSubstr(str));