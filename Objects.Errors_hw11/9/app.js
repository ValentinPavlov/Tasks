// Задача 9.. На вход подается строка
// в виде электронной почты пользователя.
// Необходимо найти в данной почте “@”.
// Если же есть, то вывести булевое true,
// в противном случае бросить исключение 
// и его обработать

const newAdress = `https://github.com`

const checkNumbers = (str) => {
    try {
        if (/^[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]+$/g.test(str)) return true;
        else throw new Error(`Not Found`)
    } catch (error){
        return error
    }
}
console.log(checkNumbers(newAdress));
