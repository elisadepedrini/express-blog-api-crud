const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
})


app.get('/', (req, res) => {
    res.json({message: "Welcome to posts"})
})

app.use('/posts', postsRouter);