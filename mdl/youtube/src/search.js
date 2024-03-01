module.exports.search = async function(req, res) {
	try {
		const{
			keywords
		} = req.query 
		if (!keywords) {
			res.json({
				"error": "vui lòng nhập từ khóa tìm kiếm"
			})
		}
		const youtubesearchapi = require("youtube-search-api");
		const key = await youtubesearchapi.GetListByKeyword(keywords, true, 10, [{ type: "video" }])
		var obj = []
		for (var cc of key.items) {
			obj.push({
				"id": cc.id,
				"thumbnails": cc.thumbnail.thumbnails[0],
				"title": cc.title,
				"channelTitle": cc.channelTitle,
				"shortBylineText": cc.shortBylineText,
				"length": cc.length,
				"isLive": cc.isLive
			})
		}
		res.json({
			"data": obj,
			"author": "Mr.Ben"
		})
		console.clear(key)
	} catch (error) {
		res.json({
			"error": "lỗi không thể tìm video"
		})
	}
}