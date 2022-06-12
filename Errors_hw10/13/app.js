let password = prompt(``);
let passwordCheck = (pass) => {
    try {
        if (pass.length >= 8) {
            return pass.replaceAll(/[a-zA-Z0-9]/g, `*`)
        } else throw new Error(`Пароль меньше 8 символов`)
    } catch (error) {

    }
}
console.log(passwordCheck(password));