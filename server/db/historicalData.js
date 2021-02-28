const Sequelize = require("sequelize");
const db = require("./database");

const HistoricalData = db.define("historicalData", {
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  // open:
  // low:
  // high:
  // close:
});
