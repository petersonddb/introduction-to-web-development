const router = require('express').Router()
const TickedDate = require('./TickedDate')

const create = (req, res) => {
  const tickedDate = TickedDate.create(req.body)
  res.json({ id: tickedDate.id })
}

const index = (req, res) => {
  res.json(TickedDate.findAll())
}

const show = (req, res) => {
  const tickedDate = TickedDate.find(req.params.id)
  res.json(tickedDate)
}

const update = (req, res, next) => {
  const tickedDate = TickedDate.find(req.params.id)

  if (!tickedDate)
    res.status(404)
  else {
    tickedDate.update({ date: req.body.date })
    res.status(200)
  }

  res.end()
}

router.post("/ticked-dates", create)
router.get("/ticked-dates", index)
router.get("/ticked-dates/:id", show)
router.put("/ticked-dates/:id", update)

module.exports = router
