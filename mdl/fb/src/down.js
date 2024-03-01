module.exports.down = async function(req, res) {
try{
	const{
		url
	} = req.query
	if (!url) {
		res.status(404).json({
			data: "Thiếu link"
		})
	}
	const a = require("axios"),
		get = (await a.post("https://www.getfvid.com/vi/downloader", {
			url: url
		})).data
	const obj = {
		"title": get.split('<input type="hidden" id="title_video" value="')[1].split('"')[0],
		"video": get.split('<div class="col-md-4 btns-download">')[1].split('<a href="')[1].split('" target=')[0],
		"music": get.split('class="btn btn-download" rel="nofollow" download>Tải xuống ở chất lượng bình thường</a>')[1].split('<a href="')[1].split('"')[0]
	}
	res.json({
		data: obj,
		author: "Mr.Ben"
	})
} catch (e) {res.json({
	data: "Error: Không xác định"
})}
}