const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

// Body parser
app.use(express.json())

app.use('/posts', postsRouter);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
})


app.get('/', (req, res) => {
    res.json({message: "Welcome to posts"})
})
