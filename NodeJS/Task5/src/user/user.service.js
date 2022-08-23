const {
    userCreateDB, updateUserDB, getAllUsersDB, getUserByIdDB, deleteUserDB
} = require("./user.repository")

const getAllUsers = async () => {
    const gotAllUsersDB = await getAllUsersDB()
    return gotAllUsersDB
}

const getUserById = async (id) => {
    const gotUserDB = await getUserByIdDB(id)
    return gotUserDB
}

const userCreate = async (name, surname, birth, city, age) => {
    const createdUserDB = await userCreateDB(name, surname, birth, city, age)
    return createdUserDB
}

const updateUser = async (id, infoID, name, surname, birth, city, age) => {
    const updatedUserDB = await updateUserDB(id, infoID, name, surname, birth, city, age)
    return updatedUserDB
}

const deleteUser = async (id) => {
    const deletedUserDB = await deleteUserDB(id)
    return deletedUserDB
}

module.exports = {
    userCreate, updateUser, getAllUsers, getUserById, deleteUser
}