// 라이브러리
// 서버 => 생성
const express = require('express');
const app = express();
// crossorigin
const cors = require('cors');
app.use(cors());
// 세부 설정
app.use(cors({
    origin: "*",
    method: ["GET","POST","DELETE","PUT"]
}))
