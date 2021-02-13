const Sequelize = require("sequelize");
const db = require("./database");

const Symbol = db.define("symbol", {
  symbol: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  exchange: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  assetType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ipoDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Symbol;
