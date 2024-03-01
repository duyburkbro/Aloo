const router = require("express").Router();
router.get("/add", (req, res) => {
	try {
		const { theme, text } = req.body
		if (!theme || !text) {
			res.sendFile(__dirname + "/add.html")
		}
		else {console.log('oke')}
	} catch (error) {
		console.log(error)
	}
})
module.exports = router