import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return next(errorHandler(403, "You need to login"));

  jwt.verify(token, "dfahdirieirhfdajf", (error, user) => {
    if (error) return next(errorHandler(401, "Token is not valid"));

    req.user = user;
    next();
  });
};
