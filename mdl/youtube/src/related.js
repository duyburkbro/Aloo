module.exports.related = async function(req, res) {
	try {
		const{
			url
		} = req.query 
		if (!url) {
			return res.json({
				"error": "vui lòng nhập url"
			})
		}
		const ytdl = require("ytdl-core")
	  let info = await ytdl.getInfo(url);
		var obj = []
	for (var cc of info.related_videos) {
		obj.push({
			"id": cc.id,
			"author": cc.author.name,
			"view_count": cc.view_count,
			"title": cc.title,
			"thumbnails": cc.thumbnails
		})
	}
		res.json({
			"related_videos": {
				data: obj
			},
			author: "Mr.Ben"
		})
	} catch (error) {
		res.json({
			"error": "lỗi không thể tải video liên quan"
		})
	}
}