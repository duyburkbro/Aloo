module.exports.text = async function(req, res) {
	try {
		const{
			text
		} = req.query
		if (!text) {
			return res.json({
				"error": "thiếu text"
			})
		}
		const
			path = __dirname + "/data/simsimi.json",
			fs = require("fs-extra"),
			reply = text.toLowerCase()
		if (!fs.existsSync(path)) {
			fs.writeFileSync(path, JSON.stringify({}))
		}
		const data = JSON.parse(fs.readFileSync(path))
		if (!data[reply]) {
			return res.json({
				data: "nói gì Sim không hiểu, dạy Sim với"
			})
		}
		else {
			res.json({
				data: data[reply][Math.floor(Math.random() * data[reply].length)]
			})
		}
	} catch (error) {
		res.json({
			data: "nói gì Sim không hiểu"
		})
	}
}