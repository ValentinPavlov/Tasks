let firstWord = `anna`.trim().toLowerCase().split(``).sort()
let secondWord = `Anna`.trim().toLowerCase().split(``).sort()

let anagramCheck = (word1, word2) => {
    if (isNaN(word1) && isNaN(word2) && word1[0] === word2[0] && word1.length === word2.length) {
        return true
    } else return false
}

console.log(anagramCheck(firstWord, secondWord));