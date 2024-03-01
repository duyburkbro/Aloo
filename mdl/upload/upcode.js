const express = require("express")
const upcode = express.Router()
const fs = require("fs-extra")
const { join } = require("path")
const files = fs.readdirSync(__dirname + '/data/')
setInterval(async() => {
	const time = require("moment-timezone").tz("Asia/Ho_Chi_minh").format("HH:mm:ss");
	if (time != "00:00:00") return;
	else {
		for (var file of files) {
			const del = __dirname + "/data/" + file;
			fs.unlinkSync(del)
		}
	}
}, 1000);
upcode.get('/', (req, res) => res.sendFile(__dirname + '/upcode.html'))
upcode.post('/', async function(reg, res) {
try {
	var r = Math.random().toString(36).substring(2);
	const path = __dirname + '/data/' + r + '.txt';
	const { text } = reg.body
	fs.writeFileSync(path, text)
	res.send({
		data: "thành công",
		url: "https://nodebenjs.miraiofficials123.repl.co/api/upcode/raw/" + r
	})
	await new Promise(resolve => setTimeout(resolve, 30 * 60 * 1000))
	fs.unlink(path)
} catch(e) {res.json({
	data: "error"
})}
})
upcode.get('/raw/:CODE', (reg, res) => {
try {
	const { CODE } = reg.params
	const path = __dirname + '/data/' + CODE + '.txt';
	if (!fs.existsSync(path)) {
		return res.json({
		data: "error: ID bạn nhập có thể đã bị xóa"
	})
	}
	else {
		res.sendFile(join(path))
	}
} catch (e) {
	res.json({
		data: "error: không xác định"
	})
}
})
module.exports = upcode