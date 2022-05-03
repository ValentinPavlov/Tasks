let nums = [+prompt(), +prompt(), +prompt()];
let out = 0;
for (let i = 0; i <= nums.length; i++) {
    if (nums[i] > 0) out += nums[i];
}
console.log(out);