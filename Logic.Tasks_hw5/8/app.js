let input = +prompt(`Число рядов`);
let brick = `*`
for (let i = 0; i <= input; i++) {
    console.log(brick);
    brick += `*`;
}