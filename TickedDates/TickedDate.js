var count = 1
const tickedDates = []

const find = (id) => {
  return tickedDates.find((td) => td.id == id)
}

const findAll = () => {
  return tickedDates
}

const create = ({ date }) => {
  const tickedDate = { id: count, date: date }

  tickedDate['update'] = (attrs) => {
    Object.keys(attrs).forEach((attr) => {
      tickedDate[attr] = attrs[attr]
    }
  )}

  tickedDates.push(tickedDate)
  ++count
  return tickedDate
}

exports.find = find
exports.findAll = findAll
exports.create = create
