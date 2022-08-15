const express = require("express");

const {
    Post
} = require('./posts.service')

const {
    Validation
} = require('../helper/validation')

const router = express.Router()

router.get('/all', (req, res) => {
    const AllPost = new Post
    const posts = AllPost.getAllPosts()
    res.send(posts)
})

router.get('/:id', (req, res) => {
    const AllPost = new Post
    const id = req.params.id
    const posts = AllPost.getPostById(id)
    res.send(posts)
})

router.post('/', (req,res) => {
    const AllPost = new Post
    const posts = AllPost.uploadPost(req.body)
    res.send(posts)
})

router.delete('/', (req,res) => {
    const AllPost = new Post
    const id = req.params.id
    const posts = AllPost.deletePost(id)
    res.send(posts)
})


module.exports = router