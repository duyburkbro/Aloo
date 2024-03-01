const router = require('express').Router();

router.use("/anime", require("./src/anime.js").router)
router.use("/crushben", require("./src/crushben.js").crushben)
router.use("/girl", require("./src/girltiktok.js").girltiktok)
module.exports = router