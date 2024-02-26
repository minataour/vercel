const app = require("../index")
const route = require("../routes/items")

app.use("/api/", route)

module.exports = app