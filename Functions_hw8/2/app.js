const arr = [1, 2, 3, 4, 5, 6];

function checkarr(arrparam) {
    let strError = 0;
    for (let el of arrparam) {
        isNaN(el) ? (strError += 1) : null;
    }
    if (strError > 0) return false
    else return true
}

function sumofarray(arrparam) {
    let newval = checkarr(arrparam)
    if (newval === true) {
        let res = arrparam.reduce((sum, current) => sum + current)
        return res
    } else return `ошибка`
}
let sum = sumofarray(arr)
console.log(sum);