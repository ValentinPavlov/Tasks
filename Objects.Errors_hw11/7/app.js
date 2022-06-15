// 7. На вход подается строка в виде электронной почты пользователя. Необходимо найти в данной почте “@”. 
// Если же есть, то вывести булевое true, в противном случае бросить исключение и его обработать

let input = `hannapleshko@mail.ru`;
let mailCheck = (mail) => {
    try {
        if (mail.includes(`@`)) return true
        else throw new Error(`Указанная строка не является адресом email`)
    } catch (error) {
        return error
    }
}
console.log(mailCheck(input));