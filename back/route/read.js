const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const connection = require("../db");
connection.connect((error) => {
    if (error) {
      console.error("Error connecting to MySQL server(read): " + error.stack);
      return;
    }
    console.log("Connected to MySQL server as id(read) " + connection.threadId);
});

router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));

router.get("/read/all", (req, res) => {
    const sqlQuery = `SELECT * FROM sell_board'`;

    connection.query(sqlQuery, function (error, results, fields) {
      if (error) {
        console.error(error);
        res.status(500).send('An error occurred.');
      } else {
        console.log(results);
        res.json(results);
      }
    });
});

module.exports = router;
