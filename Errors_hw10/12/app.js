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