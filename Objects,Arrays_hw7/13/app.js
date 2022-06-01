// 13
let input = 5;
let arr = [];
for (let i = 0; i<input; i++) {
    arr.push(prompt())
}
let out = arr.filter( x => {
    if (!isNaN(x)) {
        return x
    }
})
console.log(out);