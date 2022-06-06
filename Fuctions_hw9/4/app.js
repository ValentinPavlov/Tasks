let input = `Web Development Tutorial`;
let longWord = (set) => {
    set = set.split(` `);
    let out = set[0];
    set.forEach(element => {
        element.length > out.length ? out = element : null;
    });
    return out
}
console.log(longWord(input));