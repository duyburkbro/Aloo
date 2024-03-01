module.exports.trending = async function(req, res) {
	try{
	const
		{location} = req.query;
		if (!location) {
			res.json({
				data: "thiếu vùng"
			})
		}
	const
		a= require("axios"),
		get= (await a.post("https://www.tikwm.com/api/feed/list",{
			"count": 12,
			region: `${location}`,
			cursor: 0,
			web: 1,
			hd: 1
		})).data.data
	res.json({
		data: get
	})
	} catch(e){
		res.json({
		data: "error"
	})}
}