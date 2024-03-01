module.exports.down = async function(req, res) {
	try{
const
	{url} = req.query;
	if (!url) {
		res.json({
			data: "thiếu link"
		})
	}
	const
		a= require("axios"),
		get= (await a.post("https://www.tikwm.com/api/", {
			"count": 12,
			url: `${url}`,
			cursor: 0,
			web: 1,
			hd:1
		})).data,
		cc = get.data,
		obj = {
			data: {
				author: {
					"unique_id": cc.author.unique_id || null,
					"nickname": cc.author.nickname || null,
					"avatar": "https://www.tikwm.com" + cc.author.avatar || null
				},
				video: {
					"title": cc.title || null,
					"play": "https://www.tikwm.com" + cc.play || null,
					"play_count": cc.play_count || null,
					"digg_count": cc.digg_count || null,
					"comment_count": cc.comment_count || null,
					"share_count": cc.share_count || null,
					"download_count": cc.download_count || null,
				},
				music: {
					"author": cc.music_info.author || null,
					"title": cc.music_info.title || null,
					"play": cc.music_info.play || null,
				}
			}
		}
	res.json({
		data: obj,
		author: "Mr.Ben"
	})
	} catch(e) {res.json({
		data: "error"
	})}
}