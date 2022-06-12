const value = 1314;
const typeOfValue = (valueForCheck) => {
    try {
        if (isNaN(valueForCheck)) return valueForCheck
        else throw new Error(`Это число`)
    } catch(err) {
        return err;
    }

}
console.log(typeOfValue(value));