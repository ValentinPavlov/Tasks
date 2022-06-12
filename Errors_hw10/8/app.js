const mail = `main@hschool.com`;
const mailValidate = (mail) => {
    try {
        if (mail.includes(`@`)) return true
        else throw new Error(`Указанная строка не является адресом email`)
    } catch (error) {
        return error
    }
}
console.log(mailValidate(mail));