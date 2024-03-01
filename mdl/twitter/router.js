const router = require("express").Router()

router.use("/down", require("./src/down.js").down)
module.exports = router