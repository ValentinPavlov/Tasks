let input_array = [10, 20, 30, 50, 235, 3000]

let arrayValidate = (array) => {
    let numsToFind = [1, 2, 5]
    let numToCheck = 0;
    let resultArray = []
    for (let i = 0; i < array.length; i++) {
        numToCheck = array[i]
        if (String(numToCheck).length > 1) {
            for (let i = 0; String(numToCheck).length > 1; i++) {
                numToCheck /= 10
            }
        }
        if (numsToFind.includes(numToCheck)) resultArray.push(numToCheck)
        numToCheck = 0;
    }
    return resultArray
}
console.log(arrayValidate(input_array));