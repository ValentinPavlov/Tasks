let obj = {}
let num1 = 1
let num2 = 3
let middleValue = (obj, a, b) => {
    try {
        if (!isNaN(a) && !isNaN(b) && typeof (obj) === `object`) {
            obj.avg = a + b / 2
            return obj
        } else throw new Error(`Ошибка числа или объекта`)
    } catch (error) {
        return error
    }
}
console.log(middleValue(obj, num1, num2));