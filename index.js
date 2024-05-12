const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./db");
const cors = require("cors");
const busRoutes = require("./routes/busRoutes");
dotenv.config();
const app = express();
db();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/add", busRoutes);

app.listen(3000, () => {
  console.log("server running");
});
