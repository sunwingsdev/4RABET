const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("4RABET server is running");
});

app.listen(port, () => {
  console.log(`4RABET Server is running on PORT: ${port}`);
});
