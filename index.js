// const express = require("express"); // require : express라는 폴더를 내 파일들 중 찾고 없으면 node module에서 찾음
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello World");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome); // middleware

app.get("/", handleHome);

app.listen(4000, handleListening);
