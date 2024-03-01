const router = require("express").Router()

router.use("/welcomecard", require("./src/welcomecard.js").welcomecard)
module.exports = router