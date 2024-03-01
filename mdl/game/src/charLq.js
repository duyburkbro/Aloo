module.exports.charLq = async function(req, res) {
	const fs = require("fs-extra");
	const path = __dirname + "/data/charLq.json";
	const data = JSON.parse(fs.readFileSync(path))
	res.sendFile(path)
}