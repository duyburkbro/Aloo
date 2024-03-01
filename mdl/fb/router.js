const router = require("express").Router()


router.use("/down", require("./src/down.js").down)
router.use("/getuid", require("./src/getuid.js").getuid)
router.use("/getDate", require("./src/getuid.js").getDate)
module.exports = router