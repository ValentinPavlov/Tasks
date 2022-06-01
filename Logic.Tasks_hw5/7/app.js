let input = `abcdefg`;
let arr = input.split(``);
let out = false;
for (let i = 0;i<= input.length; i++) {
   
        if (input.slice(input.indexOf(arr[i] + 1),input.length).includes(arr[i]) === false) {
            out = true
            continue;
        }
        else out = false;
}
console.log(out);