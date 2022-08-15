const fs = require("fs")
const filePath = "./src/storage/data.json"



const readDataFromJson = () => {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return data
}

const getDataById = (id) => {
    const user = data.filter((key) => key.id === +id)
    if (!user.length) throw new Error("User not found")
    return user
}

const createData = (obj) => {
    try {
        const data = readDataFromJson()
        if (!data.length) throw new Error("Array is empty")
        if (obj.hasOwnProperty('name') && obj.hasOwnProperty('surname') && obj.hasOwnProperty('email') && obj.hasOwnProperty('pwd')) {
            data.push({
                ...obj,
                id: data.length + 1
            })
            fs.writeFileSync("./src/storage/data.json", JSON.stringify(data))
        } else throw new Error('Request does not have needed fields!')
        return readDataFromJson()
    } catch (error) {
        return error.message
    }
}

const updateData = (id, obj) => {
    try {
        const data = readDataFromJson()
        if (!data.length) throw new Error("Array is empty")
        if (data.findIndex(element => element.id === +id) >= 0) {
            if (obj.hasOwnProperty('name') && obj.hasOwnProperty('surname') && obj.hasOwnProperty('email') && obj.hasOwnProperty('pwd')) {
                data.forEach(element => {
                    if (element.id === +id) {
                        element.name = obj.name
                        element.surname = obj.surname
                        element.email = obj.email
                        element.pwd = obj.pwd
                    }
                })
                fs.writeFileSync("./src/storage/data.json", JSON.stringify(data))
                return readDataFromJson()
            } else throw new Error('Request does not have needed fields!')
        } else throw new Error('id for update is not found')
    } catch (error) {
        return error.message
    }
}

const deleteData = (id) => {
    try {
        const data = readDataFromJson()
        if (!data.length) throw new Error("Array is empty")
        if ((data.findIndex(element => element.id === +id) >= 0)) {
            const filtredData = data.filter((key) => key.id !== +id)
            fs.writeFileSync("./src/storage/data.json", JSON.stringify(filtredData))
            return readDataFromJson()
        } else throw new Error('id for delete is not found')
    } catch (error) {
        return error.message
    }
}


module.exports = {
    getDataById,
    createData,
    updateData,
    deleteData
}