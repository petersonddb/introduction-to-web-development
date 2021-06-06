var count = 1
const tickedDates = []

const find = (id) => {
  return tickedDates.find((td) => td.id == id)
}

const findAll = () => {
  return tickedDates
}

const create = ({ date }) => {
  const tickedDate = { date: date }

  tickedDate['update'] = (attrs) => {
    Object.keys(attrs).forEach((attr) => {
      tickedDate[attr] = attrs[attr]
    }
  )}

  if(valid(tickedDate)) {
    tickedDate.id = count
    tickedDates.push(tickedDate)
    ++count
  }

  return tickedDate
}

const valid = (tickedDate) => {
  const date = new Date(tickedDate.date)

  if(date == 'Invalid Date')
    tickedDate.errors = { date: 'Formato de data inválido' }

  return !tickedDate.errors
}

exports.find = find
exports.findAll = findAll
exports.create = create
