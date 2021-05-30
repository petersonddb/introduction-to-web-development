var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors({ origin: process.env.ALLOWED_ORIGINS }));
app.use(express.json());
app.use(require('./TickedDates/Controller'))

app.listen(3000, () => {
 console.log("Server running on port 3001");
});
