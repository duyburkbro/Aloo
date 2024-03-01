const router = require("express").Router()

router.use("/mc", require("./mc.js"))
router.use("/charLq", require("./src/charLq.js").charLq)
router.use("/taixiu", require("./src/taixiu.js").taixiu)
module.exports = router