let input = `Анна`.toLowerCase();
let reverse_check = (get_string) => {
    if (get_string.split(``).reverse().join(``) === get_string) return `yes`;
    else return `no`;
}
console.log(reverse_check(input));