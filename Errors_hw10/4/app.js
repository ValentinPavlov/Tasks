const dataParse = JSON.parse(`[1,2,3,4,5,6]`);

const isArray = (dparse) => {
    try {
        if (typeof (dparse) === `object`) return true;
        else throw new Error(`It's not an array`)
    } catch (error) {
        return error
    }
}

const isArrayOfNumber = (array) => {
    let countOfError = 0;
    array.forEach(element => {
        !isNaN(Element) ? true : countOfError++;
    });
    if (countOfError > 0) throw new Error(`There is a string inside the array`);
    else return true;
}

const findEvenNumbers = (array) => {
    try {
        let boolIsArray = isArray(array)
        let boolIsArrayOfNumber = isArrayOfNumber(array)
        if (boolIsArray === true && boolIsArrayOfNumber === true) {
            let arrayOfEvenNumbers = array.filter(element => element % 2 === 0)
            return arrayOfEvenNumbers
        }
    } catch (error) {
        return error
    }

    return arrayOfEvenNumbers
}

console.log(findEvenNumbers(dataParse));