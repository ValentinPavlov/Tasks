// 11. На вход подается строка в виде пути открытия файла, например,
//  '/home/user/dir/file.txt'. 
//  Необходимо вернуть имя файла (подстрока после последнего символа "\" )
//   из полного пути к файлу('file.txt'). 
//   Если же пользователь ввел некорректный путь – исключение.	
//   Путь считается некорректным, если:
//    1. В нем больше 1 файла не отделены знаком /
// 	2. Конечный файл не содержит расширения

let input = 'C:/home/user/dir/file.txt'

let findFileInRoute = (route) => {
    try {
        if (validateRoute(route)) {
            let filename_split = route.split(`/`)
            return filename_split[filename_split.length - 1]

        } 
    } catch (error) {
        return error
    }
}
let validateRoute = (route) => {

    if (!route.includes(`/`)) throw new Error(`Неверный путь`)
    if (/^[a-zA-Z0-9\/:_ \-]+\.[a-z]+$/g.test(route)) return true;
    else throw new Error(`Путь не содержит файла`)
}
console.log(findFileInRoute(input));