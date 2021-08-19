const router = require('express').Router()
const TickedDate = require('./TickedDate')

const create = (req, res, next) => {
  TickedDate.create(tickedDateParams(req), (err, tickedDate) => {
    if(err)
      next(err)
    else
      res.status(201).json({ _id: tickedDate._id })
  })
}

const index = async (req, res, next) => {
  TickedDate.find({}, (err, tickedDates) => {
    if(err)
      next(err)
    else
      res.json(tickedDates)
  });
}

const show = (req, res, next) => {
  TickedDate.findById(req.params.id, (err, tickedDate) => {
    if(err)
      next(err)
    else if(!tickedDate)
      res.sendStatus(404)
    else
      res.json(tickedDate)
  })
}

const update = (req, res, next) => {
  TickedDate.findById(req.params.id, (err, tickedDate) => {
    if(err)
      next(err)
    else if(!tickedDate)
      res.sendStatus(404)
    else {
      tickedDate.set(tickedDateParams(req))
      tickedDate.save((err) => {
        if(err)
          next(err)
        else
          res.sendStatus(200)
      })
    }
  })
}

const tickedDateParams = (req) => {
  return req.parameters.permit('date').value()
}

router.post("/ticked-dates", create)
router.get("/ticked-dates", index)
router.get("/ticked-dates/:id", show)
router.put("/ticked-dates/:id", update)

module.exports = router
