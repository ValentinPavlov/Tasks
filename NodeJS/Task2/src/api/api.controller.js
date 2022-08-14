const express = require("express")
const {getDataById,createData,updateData,deleteData} = require("./api.service")

const router = express.Router()

router.get("/",(req,res) => {
    res.send("Done")
})

router.get("/:id", (req,res) => {
    try {
        const {id} = req.params
        const user = getDataById(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send("User not found")
    }

})
router.post("/", (req,res) => {
    try {
        const obj = req.body
        const users = createData(obj)
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(users)
    }

})
router.put("/:id", (req,res) => {
    const obj = req.body
    const id = req.params.id
    const users = updateData(id,obj)
        res.status(200).send(users)
})

router.delete('/:id', (req,res) => {
    const {id} = req.params
    const users = deleteData(id)
    res.status(200).send(users)
})
module.exports = router
