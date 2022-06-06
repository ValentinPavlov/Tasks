let input = `Anna`

function checkPalindrom(sets) {
    if (sets.toLowerCase().split(``).reverse().join(``) === sets.toLowerCase()) return true;
    else return false
}
console.log(checkPalindrom(input));