module.exports.down = async function(req, res) {
	try {
		const{
			url
		} = req.query 
		if (!url) {
			return res.json({
				"error": "thiếu url"
			})
		}
		require("axios")({
		method: "POST",
		url:"https://www.getfvid.com/vi/twitter",
		data: require("qs").stringify({
			url: url
		})
	}).then(async function({ data }) {
	try{
		const obj = {
			"author": data.split('<div class="col-md-5 no-padd">')[1].split('target="_blank">')[1].split('</a></h5>')[0],
			"title": data.split('<div class="col-md-5 no-padd">')[1].split('<p class="card-text">')[1].split('</p>')[0],
			"video": data.split('<div class="col-md-5 no-padd">')[1].split('<div class="col-md-4 btns-download">')[1].split('<a href="')[1].split('"')[0]
		}
			res.json({
				data: obj,
				author: "Mr.Ben"
			})
		} catch(e){
		res.json({
		"error": "lỗi"
		})}
		})
	} catch (error) {
		res.json({
			"error": "lỗi không thể tải video"
		})
	}
}