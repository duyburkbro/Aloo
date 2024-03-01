module.exports.router = async function(req, res) {
	try {
		const
			path = __dirname + "/data/anime.json",
			data = JSON.parse(require("fs-extra").readFileSync(path))
		res.json({
			url: data[Math.floor(Math.random() * data.length)], 
			author: "Mr.Ben"
		})
	} catch (error) {
		res.json({
			data: "Error: Không xác định"
		})
	}
}