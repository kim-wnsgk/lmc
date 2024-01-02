const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

const testdb = require("./testdb.js");

app.use("/testdb", testdb);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`${PORT}` + " port open");
});
