module.exports = async function (req, res) {
	const 
		axios = require('axios'),
		{ keywords } = req.query;
	if (!keywords) return res.json({
		status: 404,
		msg: 'Vui lòng nhập keywords'
	})
	axios({
		method: 'POST',
		url: 'https://tikwm.com/api/feed/search',
		data: require('qs').stringify({
			keywords,
			count: 50,
			cursor: 0,
			web: 1,
			hd: 1
		})
	}).then(async ({ data }) => {
		res.json(data)
	})
}