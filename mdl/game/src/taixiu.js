module.exports.taixiu = async function(req, res) {
	try {
		const{
			input
		}= req.query
		if (!input) return res.send({"error": "vui lòng nhập input"})
		var kq = []
		for (i = 0; i < 3; i++) {
			var rd= Math.floor(Math.random() * 6) + 1
			kq.push(rd)
		}
		var
			type = (kq[0] + kq[1] + kq[2] > 10) ? "tài" : "xĩu";
		res.json({
			"turn": kq.join(", "),
			"value": type,
			"result": (type == input.toLowerCase()) ? "Thắng" : "thua"
		})
	} catch (error) {
		res.json({error})
	}
}