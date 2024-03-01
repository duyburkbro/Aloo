module.exports.random = async function(req, res) {
	try {
		const{
			limiter
		} = req.query
		const youtubesearchapi = require("youtube-search-api");
		const get = await youtubesearchapi.GetSuggestData(limiter || 6)
		res.json({
			"data": get,
			"author": "Mr.Ben"
		})
		console.clear(youtubesearchapi)
	} catch (error) {
		res.json({
			'error': "lỗi"
		})
	}
}