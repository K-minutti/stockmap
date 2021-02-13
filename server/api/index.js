const router = require("express").Router();

router.use("/searchKey", require("./search"));
router.use("/symbols", require("./symbols"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
