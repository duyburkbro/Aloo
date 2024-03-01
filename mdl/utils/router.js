const router = require('express').Router()


router.use('/health', require('./src/health.js').health)
router.use('/age', require('./src/age.js').age)
router.use("/decode", require("./src/decodevsencode.js").decode);
router.use('/gpt', require('./src/gpt.js'))
module.exports = router 