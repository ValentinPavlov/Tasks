const {
    data
} = require("../storage/data")

const getDataById = (id) => {
    const user = data.filter((key) => key.id === +id)
    if (!user.length) throw new Error("User not found")
    return user
}

const createData = (obj) => {
    try {
        if (!data.length) throw new Error("Array is empty")
        if (obj.hasOwnProperty('name') && obj.hasOwnProperty('surname') && obj.hasOwnProperty('email') && obj.hasOwnProperty('pwd')) {

            data.push({
                ...obj,
                id: data.length + 1
            })
        } else throw new Error('Request does not have needed fields!')
        return data
    } catch (error) {
        return error.message
    }
}

const updateData = (id, obj) => {
    try {
        if (obj.hasOwnProperty('name') && obj.hasOwnProperty('surname') && obj.hasOwnProperty('email') && obj.hasOwnProperty('pwd')) {
            data.forEach(element => {
                if (element.id === +id) {
                    element.name = obj.name
                    element.surname = obj.surname
                    element.email = obj.email
                    element.pwd = obj.pwd
                }
            })
            return data
        } else throw new Error('Request does not have needed fields!')
    } catch (error) {
        return error.message
    }


}

const deleteData = (id) => {
    try {
        const filtredData = data.filter((key) => key.id !== +id)
        if (filtredData.length !== data.length) {
            return filtredData
        } else throw new Error('The request ID was not found')
    } catch (error) {
        return error
    }
}


module.exports = {
    getDataById,
    createData,
    updateData,
    deleteData
}