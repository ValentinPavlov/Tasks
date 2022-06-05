const arr = [1, 2, 3, 4, 5, 6];
let errcount = 0;
let out = 0;

function getsumm(arrparam) {
    arrparam.forEach(element => {
        out *= element;
    })
    return out
}

function checkarr(arrparam) {
    arrparam.forEach(element => {
        (isNaN(element)) ? errcount += 1: null;
    });
    if (errcount === 0) {
        return getsumm(arrparam)
    } else return `Ошибка ввода`
}