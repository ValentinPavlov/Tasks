const url = `https://google.com`

let urlValidate = (url) => {
    try {
        if (/^(http|https):\/\/[a-zA-Z]+\.[a-z]+$/g.test(url)) return true;
        else throw new Error(`wrong adress`);
    } catch (error) {
        return error;
    }
}
console.log(urlValidate(url));