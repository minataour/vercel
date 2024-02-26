const express = require('express');
const routes = require("./routes/router");

const app = express();

app.use("/", routes);

app.listen(8080);

module.exports = app;