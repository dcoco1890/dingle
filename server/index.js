const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pino = require("express-pino-logger")();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(pino);

app.use(require('./api/api'));



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));