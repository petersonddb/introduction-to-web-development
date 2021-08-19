const validationErrorHandler = (err, req, res, next) => {
  if(err.name === 'ValidationError') {
    res.status(422).json(err)
  } else {
    next(err)
  }
}

module.exports = validationErrorHandler
