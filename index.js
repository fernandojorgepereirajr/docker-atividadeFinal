const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Atividade Final");
});

app.listen(3000);