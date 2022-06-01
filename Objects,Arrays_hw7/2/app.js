

//Проверьте, что в объекте есть ключ age
let obj = {
    name: "Piter",
    age: 54,
}
let arr = [obj]
arr.forEach(element => {
if (obj["age"] !== undefined) console.log("Есть!");
else console.log("Отсутствует");
});