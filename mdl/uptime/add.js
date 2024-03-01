const router = require("express").Router()

router.get("/add", (req, res) => {
		try {
		const { url } = req.query;
		if (!url) return res.json({ "status": false, "msg": "please enter the link" });
		const 
			fs = require("fs-extra"),
			path = __dirname + "/link.json",
			data = require(path);
		if (!data.includes(url)) {
			data.push(url);
			res.json({
				"status": true,
				"msg": "added your link to the UPTIME API"
			})
			return fs.writeFileSync(path, JSON.stringify(data, null, 2))
		}
		else {
			res.json({
				"status": false,
				"msg": "The link you entered is already on the system"
			})
		}
	} catch (error) {
		console.log("error", error)
		}
})
module.exports = router