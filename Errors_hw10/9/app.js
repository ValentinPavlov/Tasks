const mail = `main@hschool.com`

const mailFinder = (str) => {
    try {
        if (/^[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]+$/g.test(str)) return true;
        else throw new Error(`Mail is not Found`)
    } catch (error){
        return error
    }
}
console.log(mailFinder(mail));