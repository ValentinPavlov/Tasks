require('dotenv').config({
    path: './environment/.env',
    encoding: 'latin1',
    debug: true,
    override: false
})
const app = require('./src/app')
const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})