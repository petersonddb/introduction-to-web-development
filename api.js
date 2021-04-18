var express = require("express");
var app = express();

var count = 1;
const tickedDates = [];

app.use(express.json());

app.post("/ticked-dates", (req, res, next) => {
  tickedDates.push({ id: count, date: req.body.date });
  res.json({ id: count });
  ++count;
});

app.get("/ticked-dates", (req, res, next) => {
  res.json(tickedDates);
 });

app.put("/ticked-dates/:id", (req, res, next) => {
  tickedDate = tickedDates.find((td) => td.id == req.params.id);

  if (!tickedDate)
    res.status(404);
  else {
    tickedDate.date = req.body.date;
    res.status(200);
  }

  res.end();
});

app.listen(3000, () => {
 console.log("Server running on port 3001");
});
