module.exports = async function(req, res) {
	const {
		text
	} = req.query;
	if (!text) return res.json({
		status: 404,
		msg: 'vui lòng nhập văn bản hoặc câu hỏi muốn gpt trả lời'
	});
	let 
		getToken = tex => tex.split(/"/).find($ => /^eyJ/.test($)),
		getContent = tex => tex.split(/data\: /).filter($ => /^\{"i/.test($)).map($ => $ = JSON.parse($.replace(/\n\n$/, ''))).map($ => $.choices[0].delta.content || '').join('');
		 require('axios').get(`https://gptgo.ai/?q=${text}&hl=vi&hlgpt=default#gsc.tab=0&gsc.q=${text}&gsc.page=1`).then(({data}) => require('axios').get(`https://gptgo.ai/action_ai_gpt.php?token=${getToken(data)}`).then(async ({ data }) => res.json({ status: true, msg: getContent(data)}))).catch(res.send);
}