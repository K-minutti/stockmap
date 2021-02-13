const router = require("express").Router();
const { listedSymbols } = require("../data/index");

router.get("/:text", async (req, res, next) => {
  try {
    const string = req.params.text;
    const text = string.replace(/[^a-zA-Z0-9]/g, "");
    const matches = listedSymbols["_rejectionHandler0"].filter((symbol) => {
      const regex = new RegExp(`^${text}`, "gi");
      return symbol["symbol"].match(regex) || symbol["symbol"] == text;
    });

    const bestMatches = [];
    const len = matches.length > 10 ? 10 : matches.length;
    for (let i = 0; i < len; i++) {
      bestMatches.push(matches[i]);
    }

    res.json(bestMatches);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
