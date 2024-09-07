const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = (req, res, next) => {
  console.log("here i am...", req.cookies);
  const token = req.cookies.token;
  if (!token) return res.status(401).send("No token, authorisation denied");
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    if (decoded.role != "admin") return res.status(401).send("Invalid token");
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    res.clearCookie("token");
    return res.status(401).send("Invalid token");
  }
};
