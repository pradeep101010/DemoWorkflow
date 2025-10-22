const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = req.query.name || "World";
  res.send(`Hello, ${name}. This is your demo Node.js App running on Azure! And this is post CD modification `);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
