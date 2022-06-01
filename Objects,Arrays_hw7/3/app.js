// Имеется массив объектов. 
// Получите из этого массива объект, где name === "Bob" 
// и сохраните это в какой-либо переменной

let arr = [
    {
    name: `chel`,
}, 
    {
    name: `boba`,
}, 
    {
    name: `biba`,
}, 
]

let res = arr.filter(el => el.name === `boba`)
console.log(res);