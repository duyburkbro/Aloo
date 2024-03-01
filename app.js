const
	express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	get_ip = require('ipware')().get_ip,
	chalk = require("chalk"),
	rateLimit = require('express-rate-limit'),
	moment = (format) => require("moment-timezone").tz("Asia/Ho_Chi_minh").format(format),
	fs = require("fs-extra");
const limiter = rateLimit({
	windowMs: 60 * 1000,
	max: 20,
	message:
		'bạn đã yêu cầu quá nhiều, vui lòng hạn chế'
})
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb'}))
app.set("json spaces", 2)
app.get("/", require('./test.js'))
app.use('/cv', require('./cv/main.js'))
app.use('/api', limiter, (req, res, next) => {
	//console.log (req)
	const coler = ["red", "blue", "green", "black"];
	var get_info = get_ip(req).clientIp;
	console.log(chalk[coler[Math.floor(Math.random() * coler.length)]].underline.bold(`[${moment('HH:mm:ss')}] ` + "IP: " + get_info, "đã yêu cầu đến: " + req._parsedUrl.pathname))
	next()
}, require('./router/router.js'))
app.listen(3000, () => {
	console.log("server running to post: 3000");
});
async function uptime() {
	try {
		const
			folder = __dirname + "/mdl/uptime/link.json",
			link = require(folder),
			axios = require("axios");
		var UP = []
		for (var url of link) {
			try {
				var get = (await axios.get(url)).data || null;
				UP.push(JSON.stringify(get).length);
			} catch (error) {
				continue;
			}
		}
		return UP;
	} catch (error) {
		return;
	}
};
setInterval(uptime, 5 * 1000)