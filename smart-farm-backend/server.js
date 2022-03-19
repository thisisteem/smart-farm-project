const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

const options = {
  cors: {
    origin: "*",
  },
};

dotenv.config();

const config = require("./app/configs/config-database");
const errorHandler = require("./app/middleware/error-handler");

global.__basedir = __dirname;

// ============================= view engine setup =============================

// CORS Middleware: allow cors requests from any origin and with credentials
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);
app.options("*", cors());

// app.use(morgan("dev"));
app.use(morgan("combined"));
// app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("public"));

// ============================= routes =============================

app.use("/api/user", require("./app/routes/user.routes"));

// ============================= global error handler =============================
app.use(errorHandler.get404);

app.use(errorHandler.get500);

// ============================= Get port from environment and store in Express. =============================
const PORT = new config().app.port;
app.listen(PORT || "1000", () => {
  console.log("Listening on port " + PORT);
});

module.exports = app;
