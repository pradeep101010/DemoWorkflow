const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = req.query.name || "World";
  res.send(`Hello, ${name}. This is your demo Node.js App running on Azure!   `);
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
