import express from "npm:express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(7001, () => {
  console.log(`Server running at http://localhost:7001/`);
});
