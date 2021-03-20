// 이 파일을 통해서 siteName, routes를 pug 파일에서 변수처럼 사용할 수 있다.
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};
