
//Задача 6. 
// У вас есть массив чисел. Необходимо 
// проверить все ли элементы массива числа.
//  Если да, то вывести только уникальный 
//  числа. В противном случае исключение.
//   [1, 2, 3, 3, 1, 2, 5] -> [1, 2, 3, 5]

const arrayNumber = [1, 2, 3, 3, 1, 2, 5, `Аня сегодня какая-то очень важная, это потому что Стас приехал??!!!?`];

let checkNumber = (array) => {
    let countError = 0;
    for (let i of array) {
        (!isNaN(i)) ? true: ++countError;
    }
    if (countError > 0) {
        throw new Error(`Вы ввели строковое значение`)
    } else {
        return true;
    }
}
let unicValuesOfArray = (arrayValues) => {
    let boolCheck = checkNumber(arrayValues);
    if (boolCheck === true) {
        let currentElements = [];
        for (let i of arrayValues) {
            if (!currentElements.includes(i)) {
                currentElements.push(i)
            }
        }
        return currentElements
    } 
}
console.log(unicValuesOfArray(arrayNumber));