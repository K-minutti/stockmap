const csvFilePath = "server/data/listing_status.csv";
const csv = require("csvtojson");

const listedSymbols = csv()
  .fromFile(csvFilePath)
  .then((result) => {
    return result;
  });
module.exports = listedSymbols;
