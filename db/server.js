const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const dbFunc = require("./dbConfig");
const con = dbFunc.con;

const app = express();

app.use(express.json());
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
