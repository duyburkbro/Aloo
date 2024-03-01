const router = require("express").Router()

router.use("/output", require("./src/text.js").text)
router.use("/add", require("./src/add.js").add)
module.exports = router