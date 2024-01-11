const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

const testdb = require("./testdb.js");
const write = require("./route/write.js");

app.use("/testdb", testdb);
app.use("/write", write);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

app.listen(PORT, () => {
  console.log(`${PORT}` + " port open");
});

// 수정용
