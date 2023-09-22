/*
Rutas leer y crear entradas en el blog
host + /api/entries
*/

const express = require("express");
require("dotenv").config();

const app = express();

app.use("/api/entries", require("./routes/entries"));

// app.get("/", (req, res) => {
//   res.json({
//     ok: true,
//     message: "Hello World",
//   });
// });

// Directorio publico

app.use(express.static("public"));

app.listen(process.env.PORT, () => {
  console.log("Listening");
});
