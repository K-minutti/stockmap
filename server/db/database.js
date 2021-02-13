// creating db and connecting to postgres
const chalk = require("chalk"); // for console log
const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const dbName = pkg.name;
console.log(chalk.yellow(`Opening database connection to ${dbName}`));

const db = new Sequelize(
  `postgres://kevinminutti:minutti64@localhost:5432/${dbName}`,
  {
    logging: false,
  }
);

module.exports = db;
