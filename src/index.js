// const express = require("express");
const express = require('express');
import * as dotenv from 'dotenv';

// import connection from "./configs/connectDB";
import configViewEngine from './configs/viewEngine.js';
import initWebRouter from './routes/web';

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// setup view engine
configViewEngine(app);

// init web router
initWebRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
