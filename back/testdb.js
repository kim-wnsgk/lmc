const express = require("express");
const connection = require("./db");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL: " + error.stack);
    return;
  }
  console.log("Connected to MySQL server " + connection.threadId);
});

router.get("/", (req, res) => {
  const query = "SELECT * FROM user";

  connection.query(query, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
