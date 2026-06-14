const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

const notFound = require('./middlewares/notFound')
const serverError = require('./middlewares/serverError')

// Body parser
app.use(express.json())


app.get('/', (req, res) => {
    res.json({message: "Welcome to posts"})
})


app.use('/posts', postsRouter);


app.use(notFound)
app.use(serverError)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
})