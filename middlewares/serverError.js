const serverError = (err, req, res, next) => {
    res.status(500).json({message: '500 server error'})
}


module.exports = serverError