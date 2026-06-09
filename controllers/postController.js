const posts = require('../immagini_e_post/posts')

// INDEX
const index = (req, res) => {
    res.json({message: "index of posts"})
}


// SHOW
const show = (req, res) => {
    const { id } = req.params
    res.json({message: `show of post with id ${id}`})
}


// DESTROY
const destroy = (req, res) => {
    const { id } = req.params
    res.json({message: `delete post with id ${id}`})
}