const fs = require("fs")
const filePath = "./src/storage/posts.json"

class Post {
    constructor() {
        this.post = Post
    }
    readDataFromJson = () => {
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
        return data
    }

    getAllPosts = () => {
        const DataFromJson = JSON.parse(fs.readFileSync(filePath, "utf8"));
        return DataFromJson
    }

    getPostById = (id) => {
        const DataFromJson = JSON.parse(fs.readFileSync(filePath, "utf8"));
        const filtredPosts = DataFromJson.filter((key) => key.id === +id)
        if (!filtredPosts.length) throw new Error("User not found")
        return filtredPosts
    }

    uploadPost = (reqObj) => {
        const DataFromJson = JSON.parse(fs.readFileSync(filePath, "utf8"));
        DataFromJson.push({
            ...reqObj,
            id: DataFromJson.length + 1
        })
        fs.writeFileSync("./src/storage/posts.json", JSON.stringify(DataFromJson))
        return JSON.parse(fs.readFileSync(filePath, "utf8"))
    }

    deletePost = (id) => {
        const DataFromJson = JSON.parse(fs.readFileSync(filePath, "utf8"));
        DataFromJson = data.filter((key) => key.id !== +id)
        fs.writeFileSync("./src/storage/data.json", JSON.stringify(DataFromJson))
        return JSON.parse(fs.readFileSync(filePath, "utf8"))
    }

}

module.exports = {
    Post
}