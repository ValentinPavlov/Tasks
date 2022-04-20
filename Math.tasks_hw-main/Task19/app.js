const abcd = +prompt(`Введите число`); //1234
const a = (Math.floor(abcd / 1000)); //1
const b = (Math.floor((abcd / 100) % 10));
const c = (Math.floor((abcd % 100) / 10));
const d = (Math.floor(abcd % 10))
console.log(`Цифра в позиции тысяч равна ${a}`);
console.log(`Цифра в позиции сотен равна ${b}`);
console.log(`Цифра в позиции десятков равна ${c}`);
console.log(`Цифра в позиции единиц равна ${d}`);