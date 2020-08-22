const routes = require('express').Router();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./static/swagger.json");

routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }))

module.exports = routes;