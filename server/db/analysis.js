const db = require("./database");
const Sequelize = require("sequelize");

const Analysis = db.define("analysis", {});

module.exports = Analysis;
