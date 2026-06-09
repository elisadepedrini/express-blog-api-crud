const express = require('express')
const { log } = require('node:console')
const app = express()
const port = 3000


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
})


app.get('/', (req, res) => {
    res.json({message: "Welcome to "})
})