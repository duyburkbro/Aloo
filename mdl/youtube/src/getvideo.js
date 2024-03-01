module.exports.getvideo = async function(req, res) {
	try {
		const{
			url
		}= req.query
		if (!url) {
			return res.json({
				"error": "thiếu url"
			})
		}
	const ytdl = require("ytdl-core")
	let info = await ytdl.getInfo(url);
	let video = ytdl.chooseFormat(info.formats, { quality: 18 });
		let music = ytdl.chooseFormat(info.formats, { quality: 249 });
		res.json({
			video: {
				"title": info.videoDetails.title,
				"description": info.videoDetails.description,
				"video": video.url,
				"music": music.url
			},
			author: "Mr.Ben"
		})
	} catch (error) {
		console.log(error)
		res.json({
			"error": "lỗi không thể getvideo"
		})
	}
}