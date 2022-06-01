//15
let input = [];
let n = 5;
let out = [];
for (let i = 0; i<n; i++) {
    input.push(+prompt())
}
input.forEach(element => {
    out.push(element**2)
});
console.log(out);