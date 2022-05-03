let num = +prompt(`введите число`);
if (isNaN(num)===false) {
if (num>0) console.log(`Число больше 0`);
else if (num<0) console.log(`Число меньше 0`);
else console.log(`Это 0`);
}
else console.log(`Это не число`);