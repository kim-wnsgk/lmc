const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const connection = require("../db");
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL server(write): " + error.stack);
    return;
  }
  console.log("Connected to MySQL server as id(write) " + connection.threadId);
});

router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));

router.post("/write", (req, res) => {
  // POST 요청의 본문에서 필요한 데이터 추출
  const {
    type,
    state,
    method,
    productName,
    itemDescription,
    category,
    price,
    images,
  } = req.body;

  // 여기에서 추출한 데이터를 사용하여 원하는 작업 수행
  // 예시: 데이터를 콘솔에 출력
  console.log("Received Data:", {
    type,
    state,
    method,
    productName,
    itemDescription,
    category,
    price,
    images,
  });

  // 적절한 응답 전송
  res
    .status(200)
    .json({ success: true, message: "데이터가 성공적으로 전송되었습니다." });
});

module.exports = router;
