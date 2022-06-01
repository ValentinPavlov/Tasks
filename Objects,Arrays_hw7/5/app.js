// 5. Необходимо пройтись по всем age 
// и удвоить каждое значение. 
// На выходе мы должны получить 
// новый массив объектов такого же вида, 
// но с удвоенным age

let arr = [
    { age: 17},
    { age: 18},
    { age: 19},
]
const newarr = arr.map(Element => {age: Element.age * 2})
console.log(newarr);