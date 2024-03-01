module.exports.post = async function(req, res) {
	try {
	const 
		{unique_id} = req.query,
		get = (await require("axios").post("https://www.tikwm.com/api/user/posts",{
			count: 12,
			cursor: 0,
			hd: 1,
			web: 1,
			unique_id: `${unique_id}`
		})).data.data.videos,
		obj = []
	for (var cc of get) {
		obj.push({
			author: {
				"author": cc.author.unique_id || null,
				"nickname": cc.author.nickname || null,
				"avatar": "https://www.tikwm.com" + cc.author.avatar || null
			},
			video: {
				"title": cc.title || null,
				"cover": "https://www.tikwm.com" + cc.cover || null,
				"play": "https://www.tikwm.com" + cc.play || null,
				"play_count": cc.play_count || null,
				"digg_count": cc.digg_count || null,
				"comment_count": cc.comment_count || null,
				"share_count": cc.share_count || null,
				"download_count": cc.download_count || null,
			},
			music:{
				"title": cc.music_info.title || null,
				"author": cc.music_info.author || null,
				"album": cc.music_info.album || null,
				"music": cc.music_info.play || null
			}
		})
				}
	res.json({
		data: obj
	})
	} catch(e) {res.json({
		data: "error"
	})}
}