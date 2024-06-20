const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.send("<h1>Hola que tal</h1>");
});

app.listen(5001);
