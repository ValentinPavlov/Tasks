let user = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Anna",
        age: 19
    }
]
let result = {}
user.forEach(element => {
    if(element["name"] === "Anna") {
       user = user.filter(element => element["name"] !== "Anna")
    }
});