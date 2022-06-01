//9
let arr = [1,2,2,3,4,5,5];
let outm = []
arr.forEach(element => {
    if (!outm.includes(element))  outm.push(element)
});
console.log(outm);