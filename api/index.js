const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // Import the path module
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoute");
const foodRoutes = require("./routes/foodRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB with updated options
mongoose
  .connect(
    "mongodb+srv://uzair:uzair123@api.cpammnv.mongodb.net/Pizza_UNO?retryWrites=true&w=majority&appName=API"
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Middleware for CORS and JSON parsing
const allowedOrigins = ["http://localhost:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json({ limit: "3mb" }));

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads/"); // Destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // File name with timestamp
  },
});

// Initialize multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // Limit file size to 10MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// Upload image route
app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file === undefined) {
    return res.status(400).json({ message: "Error: No file selected!" });
  } else {
    res.status(200).json({
      message: "Image uploaded successfully!",
      file: req.file,
    });
  }
});

// Check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif|webp/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images only!");
  }
}

// Routes
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/food", foodRoutes);
app.use("/order", orderRoutes);
// app.use("/cart", cartRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});
