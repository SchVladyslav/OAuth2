const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = 3000;
const app = express();

const start = async () => {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
};

start();
