//14
let input = [`test`,`test_0`,`test_1`]

console.log(input[0],input[input.length-1])
console.log(input.pop());
console.log(input[input.indexOf(`test`)],input[input.indexOf(`test_1`)]);
for (let i = 0; i<input.length; i++) {
    if (input[i]=== `test` || input[i]`test_1`) {
        console.log(input[i]);
    }
}
input.forEach(element => {
    if(element === `test` || element === `test_1`) console.log(element);
})