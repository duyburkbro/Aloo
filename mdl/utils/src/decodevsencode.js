module.exports.decode = async function(req, res) {
	try {
		const{
			input
		} = req.query 
		if (!input) return res.json({"error": "vui lòng nhập input"})
		require("axios")({
			method: "POST", 
			url: "https://amp.base64decode.org/?__amp_source_origin=https://amp.base64decode.org",
			data: require("qs").stringify({
				input,
				charset: "UTF-8"
			})
}).then(function({ data }) {res.json(data)})
	} catch (error) {
		res.json({"error": "lỗi xẩy ra"})
	}
}