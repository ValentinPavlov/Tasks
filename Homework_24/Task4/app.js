// Пользователь вводит с клавиатуры значение. Данное значение записывает
// в num. Переменная num может принимать 4 числовых значения: 1, 2, 3 или 4. Если
// она имеет значение 1, то в переменную result запишите 'весна', если имеет
// значение 2 – 'лето' и так далее, если же какое-то другое значение ввелось с
// клавиатуры помимо 1-4, то вывести надпись ,,Некорректный ввод,,.
let num = +prompt('Введите значение')
switch (num) {
    case 1:
        console.log(`Весна`);
        break
    case 2:
        console.log(`лето`);
        break
    case 3:
        console.log(`осень`);
        break
    case 4:
        console.log(`зима`);
        break
    default:
        console.log(`Введите значение больше 0 и меньше 4`);
        break
}