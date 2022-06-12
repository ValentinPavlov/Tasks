const username = `Жмышенко Валерий Альбертович`
const usernameValidate = (username) => {
    try {
        if (username.split(` `).length === 3) {
            if (/^[\sa-zA-Z]+$/g.test(username)) return true
            else throw new Error(`Строка содержит спецсимволы или цифру`)
        } else throw new Error(`Введите ФИО полностью!`)
    } catch (error) {
        return error
    }
}
console.log(usernameValidate(username));