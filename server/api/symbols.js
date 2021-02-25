const router = require("express").Router();
const { Symbol } = require("../db/index");
const { listedSymbols } = require("../data/index");
// insert middleware analyze,
router.post("/analyze", async (req, res, next) => {
  try {
    const symbolsToAnalyze = req.body.symbols;
    const symbolData = getSymbolDataObjects(
      symbolsToAnalyze,
      listedSymbols["_rejectionHandler0"]
    );
    const symbolsCreated = await Symbol.bulkCreate(symbolData, {
      updateOnDuplicate: ["symbol"],
    }); //fields:["symbol"],
    // call api to make request for historical data of each
    res.json(symbolsCreated);
  } catch (err) {
    console.error(err);
  }
});

// router.get("/historicalData");

function getSymbolDataObjects(inputSymbols, listedSymbols) {
  const symbolsTocreate = [];
  for (let i = 0; i < inputSymbols.length; i++) {
    const matchInputSymbol = (element) => element["symbol"] == inputSymbols[i];
    const index = listedSymbols.findIndex(matchInputSymbol);
    if (index !== -1) symbolsTocreate.push(listedSymbols[index]);
  }
  return symbolsTocreate;
}

module.exports = router;
