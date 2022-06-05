let input1 = `Дорога`.trim().toLowerCase();
let input2 = `Города`.trim().toLowerCase();
let anagramm_check = (check1, check2) => {
    check1 = check1.split(``).sort().join(``)
    check2 = check2.split(``).sort().join(``)
    if (check1 === check2) return true;
    else return false;
}
console.log(anagramm_check(input1, input2));