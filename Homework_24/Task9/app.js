let a = prompt(`Введите значение 1`).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim().toLowerCase().split(" ").join("");
let b = prompt(`Введите значение 2`).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim().toLowerCase().split(" ").join("");
let result = 0;
if (a.length > 0 && b.length > 0 && a.length === b.length && isNaN(a) === true && isNaN(b) === true) {
    for (let i = 0; i <= a.length; i++) {
        if (b.includes(a[i]) === true) {
            result += 1;
            continue
        } else if (result === a.length && result === b.length) console.log(`Верно!`);
        else console.log(false);
    }
} else console.log(`Одна или две строки пустые, имееют разную длинну или являются числами`);