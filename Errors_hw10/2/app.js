const getValue = 21;
const checkIsNanOfValue = (value) => {
    if (isNaN(value)) throw new Error(`it's a string`)
    else return value
}
const checkNumberOfValue = (value) => {
    try {
        let number = checkIsNanOfValue(value);
        if (number % 2 == 0) return value
        else throw new Error(`Не четное число`)
    } catch (err) {
        return (err)
    }
}
console.log(checkNumberOfValue(getValue));