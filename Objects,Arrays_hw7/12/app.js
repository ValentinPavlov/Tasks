12
const input = [`paragraph`,7,`coffee`,8,9,10]
let letters = []
let nums = []
for (let i = 0; i<input.length; i++) {
    if (isNaN(input[i])) letters.push(input[i])
    else nums.push(input[i])
}
console.log(letters,nums);