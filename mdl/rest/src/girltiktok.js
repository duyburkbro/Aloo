module.exports.girltiktok = async function(req, res) {
	try {
		const data= require("./data/girltiktok.json")
		var rd = data[Math.floor(Math.random() * data.length)]
		require("axios")({
			method: "GET",
			url: rd,
			responseType: "stream"
		}).then(function({ data }) {
			data.pipe(res)
		})
	} catch (error) {
		console.log(error)
		res.json({
			"error": "lỗi xẩy ra"
		})
	}
}