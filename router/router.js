const router = require("express").Router();

router.use('/upcode', require('../mdl/upload/upcode.js'))
router.use("/random", require("../mdl/rest/router.js"))
router.use("/facebook", require("../mdl/fb/router.js"))
router.use("/canvas", require("../mdl/canvas/router.js"))
router.use("/tiktok", require("../mdl/tiktok/router.js"))
router.use("/simsimi", require("../mdl/simsimi/router.js"))
router.use('/utils', require('../mdl/utils/router.js'))
router.use("/twitter", require("../mdl/twitter/router.js"))
router.use("/youtube", require("../mdl/youtube/router.js"))
router.use("/game", require("../mdl/game/router.js"))
router.use("/uptime", require("../mdl/uptime/add.js"))
router.use('/upload', require('../mdl/upload/upfile.js'))

module.exports = router