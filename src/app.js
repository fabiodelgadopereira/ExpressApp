require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env",
});
const express = require("express");

class AppController {
  constructor() {
    this.express = express();
    this.routes();

  }
  routes() {
    this.express.use(require("./routes"));
    require("./app/controllers/index")(this.express);
  }
}
module.exports = new AppController().express;
