const router = require("express").Router()


router.use('/random', require('./src/random.js').random)
router.use("/search", require("./src/search.js").search)
router.use("/related", require("./src/related.js").related)
router.use("/getvideo", require("./src/getvideo.js").getvideo)
module.exports = router 