// 4
let base = [
    {"id": "javascript", "label": "Javascript", "category": "programmingLanguages", "priority":4},
    {"id": "sql", "label": "SQL", "category": "programmingLanguages", "priority":4},
    {"id": "go", "label": "GO", "category": "programmingLanguages", "priority":4},
    {"id": "c++", "label": "python", "category": "programmingLanguages", "priority":4},
]
let input = {id: "python", "label": "C++", "category": "programmingLanguages", "priority":4}
let res = base.filter(element =>  element.id === input.id)
if (res.length>0) {
  base = base.filter(element => element.id != input.id )
}
else console.log(`Совпадений нет`);
console.log(base);