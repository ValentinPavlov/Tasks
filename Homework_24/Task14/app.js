let nums = [+prompt(), +prompt(), +prompt(), +prompt(), +prompt()]
for (let i = 0; i <= 4; i++) {
    if (nums[i] % 2 === 0) console.log(`${nums[i]} - чет`);
    else console.log(`${nums[i]} - нечет`)
}