const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(8001, () => {
  console.log(`Server running at http://localhost:8001/`);
});
