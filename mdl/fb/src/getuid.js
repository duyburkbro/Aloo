module.exports.getuid = async function(req, res) {
	try {
		const{
			link
		} = req.query 
		if (!link) {
			return res.status(404).json({
				"error": "Vui lòng nhập link muốn lấy uid"
			})
		}
		await require('axios')({
			method: 'POST',
			url: "https://id.traodoisub.com/api.php",
			data: require('qs').stringify({
				link: link
			})
		}).then(async function({ data }) {
			await res.json({
				data
			})
		})
	} catch (error) {
		res.json({
			"error": "lỗi xẩy ra"
		})
	}
}
module.exports.getDate = async function(req, res) {
	try {
		const{
			link
		}= req.query
		if (!link) {
			return res.status(404).json({
				"error": "vui lòng nhập link muốn tìm"
			})
		}
		await require("axios")({
			method: "GET",
			url: "https://golike.com.vn/func-api.php?user="+link
		}).then(async function({ data }) {
			return res.json({
				data
			})
		})
	} catch (error) {
		res.json({
			"error": "lỗi xẩy ra"
		})
	}
}