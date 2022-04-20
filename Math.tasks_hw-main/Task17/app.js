const t = +prompt(`Введите количество минут`);
console.log(`${Math.trunc(t/60)} часа ${(t%60)} минут`);