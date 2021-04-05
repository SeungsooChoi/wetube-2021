// const express = require("express"); // require : express라는 폴더를 내 파일들 중 찾고 없으면 node module에서 찾음
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

// middleware
app.use(helmet()); // help secure
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads")); // directory에서 file을 보내주는 middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // logging

// local 변수를 global변수로 사용하도록 하는 locals라는 미들웨어
app.use(localsMiddleware);
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
