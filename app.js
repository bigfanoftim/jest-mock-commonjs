require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./src/routes");

const { globalErrorHandler } = require("./src/utils/errors");

const createApp = () => {
    const app = express();
    app.use(cors());
    app.use(morgan("combined"));
    app.use(express.json());
    app.use(routes);

    app.all("*", (req, res, next) => {
        const err = new Error(`Can't find ${req.originalUrl} on this server!`);

        err.statusCode = 404;

        next(err);
    });

    app.use(globalErrorHandler);

    return app;
};

module.exports = { createApp };
