const router = require("express").Router();

router.use("/weapon", require("./src/weapon.js").weapon)
module.exports = router