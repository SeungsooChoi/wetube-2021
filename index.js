const express = require("express"); // require : express라는 폴더를 내 파일들 중 찾고 없으면 node module에서 찾음
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(4000, handleListening);
