module.exports.age = async function(req, res) {
	try {
		const{
			years
		} = req.query 
		if (!years) {
			return res.json({ "error": "Vui lòng nhập năm sinh"})
		}
		const args = years.split("/");
		const [DD, MM, YY] = args;
		if (YY.length < 4) return res.json({
			"error": "vui lòng nhập đúng định dạng: DD/MM/YYYY"
		})
		if (DD.length < 2) DD = '0' + DD;
		if (MM.length < 2) MM = '0' + MM;
		const
			m = require('moment-timezone'),
			Y = m.tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD'),
			YYY = m.tz('Asia/Ho_Chi_Minh').format('YYYY');
		const b1 = new Date(Y);
		const b2 = new Date(YYY + '-' + MM + '-' + DD);
		const birthday = Math.ceil((b2.getTime() - b1.getTime()) / (24 * 60 * 60 * 1000))
		const d1 = new Date(Y);
		const d2 = new Date(YY + "-" + MM + '-' + DD);
		const YYYY = (time) => Math.ceil((d1.getTime() - d2.getTime()) / (time))
		res.json({
			'birthday': (birthday < 0) ? 'Đã qua' : birthday,
			"Years": YYYY(356 * 24 * 60 * 60 * 1000),
			"Month": YYYY(30 * 24 * 60 * 60 * 1000),
			"Week": YYYY(7 * 24 * 60 * 60 * 1000),
			"Day": YYYY(24 * 60 * 60 * 1000),
			"Hour": YYYY(60 * 60 * 1000),
			"Minute": YYYY(60 * 1000),
			"Second": YYYY(1000)
		})
	} catch (error) {
		res.json({
			'error': 'lỗi'
		})
	}
}