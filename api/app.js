const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const booksRouter = require("./routes/book");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./docs/config");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", booksRouter);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

module.exports = app;