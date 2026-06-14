const express = require('express')
const router = express.Router()

const postController = require('../controllers/postController')

// INDEX
router.get('/', postController.index)

// SHOW
router.get('/:id', postController.show)

// STORE
router.post('/', postController.store)

// DESTROY
router.delete('/:id', postController.destroy)


module.exports = router