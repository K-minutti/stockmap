"use strict";

const { db } = require("./server/db");
const app = require("./server");
const PORT = 4000;

db.sync().then(() => {
  console.log("db synced");

  app.listen(PORT, () =>
    console.log(`Serving all your wishes on port ${PORT}`)
  );
});
