 // 5 . На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – true, то передать массив в новую функцию, возвращающую новый массив, где каждый элемент * 2. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – true, 
// то передать массив в новую функцию, возвращающую новый массив, где каждый элемент * 2

let input = [1,2,3,4,5,6,7,8];
function nanCheck(getarr) {
    let n = 0;
    getarr.forEach(element => {
        (!isNaN(element)) ? n++ : null;
    });
   if (n === getarr.length) return doubler(getarr);
   else return false; 
}
let doubler = (arr_in)  => arr_in.map(num => num *2);
console.log(nanCheck(input));