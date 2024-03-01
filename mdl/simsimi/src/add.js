module.exports.add = async function(req, res) {
	try {
		const{
			text,
			output
		} = req.query 
		if (!text || !output) {
			return res.json({
				"data": "vui lòng nhập đúng định dạng: text ( ký tự muốn Sim nhận ), output ( trả lời ký tự được đặt )"
			})
		}
		const
			path= __dirname + "/data/simsimi.json",
			fs = require("fs-extra"),
			reply = text.toLowerCase()
			input = output.toLowerCase()
		if (!fs.existsSync(path)) {
			fs.writeFileSync(path, JSON.stringify({}))
		}
		const data = JSON.parse(fs.readFileSync(path))
		if (!data[reply]) {
			data[reply] = [input]
			fs.writeFileSync(path, JSON.stringify(data, null, 2))
			return res.json({"data": "add thành công"})
		}
		if (data[reply].includes(input)) {
			res.json({
				"data": "đã tồn tại"
			})
		}
		else {
			data[reply].push(input)
			fs.writeFileSync(path, JSON.stringify(data, null, 2))
			return res.json({
				"data": "vì text đã tồn tại, nên đã thêm output"
			})
		}
	} catch (error) {
		res.json({"data": "lỗi không xác định"})
	}
}