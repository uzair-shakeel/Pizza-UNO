const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const token = req?.cookies?.accessToken; // Optional chaining operator for safer access

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Token Verification Failed",
        });
      } else {
        req.body.userId = decode.userId;
        req.body.role = decode.role;

        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Token Server Error",
    });
  }
};

const verifyUser = (req, res, next) => {
  const userId = req.id;
  const paramsId = req.params.id;
  const role = req.role;

  if (paramsId === userId || role === "admin") {
    next();
  } else {
    res.status(401).json({ success: false, message: "You're not Authorized" });
  }
};

const verifyAdmin = (req, res, next) => {
  const role = req.body.role;
  if (role === "admin") {
    next();
  } else {
    res.status(401).json({ success: false, message: "You're not Authorized" });
  }
};

module.exports = { protect, verifyAdmin };
