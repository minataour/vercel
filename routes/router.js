const routes = require("express").Router();

const items = require("./items");

// routes.get("/", async function (req, res) {
//   //homepage route returns some HTML
//   res.send(`<h1>Reached home</h1> 
//             <br>
//             <a href='/books'>Books</a>`);
// });

routes.use("/", items);

module.exports = routes;