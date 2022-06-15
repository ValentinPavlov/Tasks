// Задача 5.. У вас есть массив из строк. Необходимо проверить является ли
//  каждый элемент массива строкой. Если все элементы строки => то вернуть строк
//   из всех элементов массива. В противном случае исключение

const arr = [`hello`, `hanna`, `and`, `eva`];

let checkOfArray = (array) => {
    errors = 0;
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) errors++;
    }
    if (errors === 0) return true;
    else throw new Error(`Вы ввели число`)
}
const mainFunction = (array) => {

    try {
        const boolOfCheckArray = checkOfArray(array);
        if (boolOfCheckArray) return array.join(``);
    } catch (error) {
        return error;
    }
}
console.log(mainFunction(arr));