//Проверьте, что объект не пустой
let obj = {
    avg: "value"
}
let exp = Object.keys(obj)
if (exp.length>0) console.log("Объект не пустой");
else console.log("Объект пуст");
