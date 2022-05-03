let nums = [+prompt(`Введите сторону 1`), +prompt(`Введите сторону 2`), +prompt(`Введите сторону 3`)]
let sides = 0;
let checker = 0;
for (let i = 0; i <= 2; i++) {
    sides += nums[i]
}
for (let i = 0; i <= 2; i++) {
    if (nums[i] < sides - nums[i]) checker += 1;
    else break;
}
if (checker === 3) console.log(`YES`);
else console.log(`NO`);