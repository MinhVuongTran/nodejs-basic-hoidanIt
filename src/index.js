// const express = require("express");
const express = require("express");
import * as dotenv from "dotenv";

import configViewEngine from "./configs/viewEngine.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
