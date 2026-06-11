
const posts = require('../data/posts')

// INDEX
const index = (req, res) => {
    
    const tag = req.query.tag
    console.log(tag)

    if(tag) {
        const filteredPost = posts.filter(post => post.tags.map(singleTag => singleTag.toLowerCase()).includes(tag))
        return res.json(filteredPost)
    }

    res.json(posts)
}


// SHOW
const show = (req, res) => {

    const postId = parseInt(req.params.id)
    const thisPost = posts.find(post => post.id === postId)

    if(!thisPost) {
        return res.status(404).json({error: true, message: '404 Post not found' })
    }
    res.json(thisPost)
}


// DESTROY
const destroy = (req, res) => {

    const postId = parseInt(req.params.id)
    const thisPost = posts.find(post => post.id === postId)

    if (!thisPost) {
    return res.status(404).json({ error: true, message: '404 Post not found' });
  }

    const index = posts.indexOf(thisPost)
    posts.splice(index, 1)
    console.log(posts)

    res.sendStatus(204)
}

module.exports = {
    index,
    show,
    destroy
}