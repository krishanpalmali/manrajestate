import { verifyUser } from "./verifyuser.js";
import { errorHandler } from "./error.js";

export const verifyAdmin = (req, res, next) => {
  verifyUser(req, res, () => {
    if (!req.user) {
      return next(errorHandler(401, "User not authenticated"));
    }

    if (req.user.role !== "admin") {
      return next(errorHandler(403, "Admin access only"));
    }

    next();
  });
};
