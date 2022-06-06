let input = `Loremipsum`.toLowerCase().split(``)
let vowel_count = (set) => {
    let vowels = [`e`, `u`, `o`, `a`, `i`]
    let result = set.reduce((count, element) => {
        if (vowels.includes(element)) return count + 1
        else count + 0
    })
    return result
}
console.log(vowel_count(input));