const router = require("express").Router()

router.use("/down", require("./src/down.js").down)
router.use("/trending", require("./src/trending.js").trending)
router.use("/post", require('./src/post.js').post)
router.use("/search", require('./src/search.js'))
module.exports = router