const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet"); // Import helmet
const rateLimit = require("express-rate-limit"); // Import express-rate-limit
const swaggerSetup = require("./swagger");
const fs = require("fs");
const https = require("https");

dotenv.config();

const app = express();

// Enable 'trust proxy'
app.set("trust proxy", 1); // Trust first proxy, you might adjust this based on your deployment

app.use(helmet()); // Use helmet

// Configure CORS
app.use(
  cors({
    origin: "https://localhost:3000", // Replace with your frontend origin
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use("/api/", apiLimiter); // Apply rate limiter to all API routes

const dataRouter = require("./routes/data");
const authRouter = require("./routes/auth");

app.use("/api/data", dataRouter);
app.use("/api/auth", authRouter);

swaggerSetup(app);

const options = {
  key: fs.readFileSync("server.key"), // Path to the generated key
  cert: fs.readFileSync("server.crt"), // Path to the generated cert
};

https.createServer(options, app).listen(5001, () => {
  console.log("HTTPS Server running on port 5001");
});
