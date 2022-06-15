let obj = {
    pavel: 203,
    tv: `one`,
    eva: 1414,
}
let numOfkeys = (obj) => {
    resultCount = 0;
    for ( key in obj) {
        (typeof(obj)=== `object` && !isNaN(obj[key]) ) ? resultCount ++ : null 
    }
    return resultCount
}
console.log(numOfkeys(obj));