// const express = require("express"); // require : express라는 폴더를 내 파일들 중 찾고 없으면 node module에서 찾음
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello World");

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // help secure
app.use(morgan("dev")); // logging

app.get("/", handleHome);
app.use("/user", userRouter);

export default app;
