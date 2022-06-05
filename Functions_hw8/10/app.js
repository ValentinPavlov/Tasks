let input = [1,2,3,4,5,6,7];

function numChecker (setin) {
    let n = 0;
    setin.forEach(element => {
        !isNaN(element) ? n += 1 : null; 
    })
    if (n === setin.length) {
        return maxChecker(setin)
    } 
    else return `Массив не соответствует`;
    
}
function maxChecker (arr_in) {
    let maxNum = 0;
    arr_in.forEach(num => {
        (num > maxNum) ? maxNum = num : null;
    });
    return maxNum
}
console.log(numChecker(input));