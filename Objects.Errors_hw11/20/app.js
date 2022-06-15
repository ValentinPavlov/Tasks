let serverData = [{
        "id": "javascript",
        "label": "JavaScript",
        "category": "programmingLanguages",
        "priority": 1
    },
    {
        "id": "sql",
        "label": "SQL",
        "category": "programmingLanguages",
        "priority": 2
    },
    {
        "id": "java",
        "label": "Java",
        "category": "programmingLanguages",
        "priority": 3
    },
    {
        "id": "go",
        "label": "GO",
        "category": "programmingLanguages",
        "priority": 1
    },
    {
        "id": "C#",
        "label": "C#",
        "category": "programmingLanguages",
        "priority": 4
    },
]

let getClientData = {
    "id": "c++",
    "label": "C++",
    "category": "programmingLanguages",
    "priority": 4
}

let dataParser = (database, clientData) => {
        try {
            let searchResult = database.some(cell => cell["id"] === clientData["id"])
            if (searchResult === false) {
                database.push(clientData)
                return database
            }
            else throw new Error(`Полученные параметры найдены в базе данных`)
            } catch (error) {
                return error
            }
        }
        console.log(dataParser(serverData, getClientData));