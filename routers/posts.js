const express = require('express')
const router = express.Router()

postController = require('../controllers/postController')

// INDEX
router.get('/', postController.index)

// SHOW
router.get('/:id', postController.show)

// DELETE
router.delete('/:id', postController.destroy)



module.exports = router