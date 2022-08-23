const express = require("express");
const {
    userCreate,
    updateUser,
    getAllUsers,
    getUserById,
    deleteUser
} = require("./user.service")
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const gotAllUsers = await getAllUsers()
        res.status(200).send(gotAllUsers)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const gotUser = await getUserById(id)
        res.status(200).send(gotUser)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const {
            name,
            surname,
            birth,
            city,
            age
        } = req.body
        if (!name && !surname && !birth && !name && !city && !age) throw new Error(`One of params length is not full`)
        const createdUser = await userCreate(name, surname, birth, city, age)
        res.status(200).send(createdUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.put('/:id/:infoID', async (req, res) => {
    try {
        const {
            id,
            infoID,
            name,
            surname,
            birth,
            city,
            age
        } = req.body
        if (!id && !infoID && !name && !surname && !birth && !city && !age) throw new Error(`One of params length is not full`)
        const updatedUser = await updateUser(id, infoID, name, surname, birth, city, age)
        res.status(200).send(updatedUser)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const deletedUser = await deleteUser(id)
        res.status(200).send(deletedUser)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
module.exports = router