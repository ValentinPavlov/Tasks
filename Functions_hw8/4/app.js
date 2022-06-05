const arr = [`asd`, `asd`, `asd`, `asd`, `asd`, `asd`];
let errcount = 0;
let out = ``;

function getstr(arrparam) {
    arrparam.forEach(element => {
        out += element;
    })
    return out
}

function checkarr(arrparam) {
    arrparam.forEach(element => {
        (!isNaN(element)) ? errcount += 1: null;
    });
    if (errcount === 0) {
        return getstr(arrparam)
    } else return `Ошибка ввода`
}

let result = checkarr(arr)
