// const express = require("express"); // require : express라는 폴더를 내 파일들 중 찾고 없으면 node module에서 찾음
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello World");

// middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // help secure
app.use(morgan("dev")); // logging

app.get("/", handleHome);

app.listen(4000, handleListening);
