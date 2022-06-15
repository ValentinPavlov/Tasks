let firstWord = `anna`.trim().toLowerCase().split(``)
let secondWord = `Anna`.trim().toLowerCase().split(``)
let palindromCheck = (word1, word2) => {
    if (isNaN(word1) && isNaN(word2) && word1.length === word2.length &&
        word1.reverse().join(``) === word2.join(``)) {
        return true
    } else return false
}
console.log(palindromCheck(firstWord, secondWord));