module.exports.welcomecard = async function(req, res) {
try{
	const{
		name,
		boxname,
		number,
		color,
		id
	} = req.query
	if (!name || !id || !parseInt(id) || !number || !parseInt(number) || !boxname) {
		res.json({
			data: "vui lòng nhập theo chỉ dẫn ví dụ:\n-> https://nodebenjs.miraiofficials123.repl.co/api/canvas/welcomecard?name=Nguy%E1%BB%85n%20Duy%20T%C3%A2n&id=100029310527150&boxname=%20ChatBot%20Vn%20Burk&number=250&color=white"
		})
	}
	async function circle(image) {
  const jimp = require('jimp');
  image = await jimp.read(image);
  image.circle();
	image.quality(720)
  return await image.getBufferAsync("image/png");
};
	const 
		c = require("canvas"),
		a = require("axios"),
		f = require("fs-extra")
	var
		pathCard = __dirname + '/data/welcomecard.jpg',
		pathUser = __dirname + '/data/UserId.jpg',
		font = __dirname + '/data/fontwelcomecard.otf';
	if (!f.existsSync(font)) {
		var FontDt = (await a.get("https://github.com/Tan-ben/Font/raw/main/Product%20Sans%20Bold.otf", {
			responseType: "arraybuffer"
		})).data;
		f.writeFileSync(font, Buffer.from(FontDt, "utf-8"))
	}
	var
		avtUser = (await a.get(`https://graph.facebook.com/${id}/picture?height=1500&width=1500&access_token=1449557605494892|aaf0a865c8bafc314ced5b7f18f3caa6`, {
			responseType: "arraybuffer"
		})).data;
	f.writeFileSync(pathUser, Buffer.from(avtUser, "utf-8"));
	var
		BackGrCard = (await a.get("https://i.pinimg.com/736x/06/07/96/060796a5c87ea5d4dfc0b4a511fd7cf1.jpg", {
			responseType: "arraybuffer"
		})).data;
	f.writeFileSync(pathCard, Buffer.from(BackGrCard, "utf-8"));
	var avtRotate = await circle(pathUser)
	var
		avt = await c.loadImage(avtRotate)
		banner= await c.loadImage(pathCard),
		canvas = c.createCanvas(banner.width, banner.height), 
		ctx= canvas.getContext("2d");
	ctx.drawImage(banner, 0, 0)
	ctx.drawImage(avt, canvas.width / 2.40, 75, 120, 120)
	c.registerFont(font, {
		family: "DT"
	})
	ctx.fillStyle = color || "black";
	ctx.font = "40px DT";
	ctx.fillText(`Chào mừng: ${name.split(' ').length > 3 ? name.split(" ")[0] +" " + name.split(" ")[1] +" "+ name.split(" ")[2] + "..." : name}`, canvas.width / 5.70, 250)
	ctx.font = "30px DT";
	ctx.fillText(`Welcome to Group: ${boxname.split(' ').length > 3 ? boxname.split(" ")[0] +" " + boxname.split(" ")[1] +" "+ boxname.split(" ")[2] + "..." : boxname}`, canvas.width / 5.20, 300)
	ctx.fillText(`Bạn là thành viên thứ: ${number}`, canvas.width / 5.20, 350)
	const canvasBuffer = canvas.toBuffer()
	f.writeFileSync(pathCard, canvasBuffer)
	//await new Promise(resolve => setTimeout(resolve, 2 * 1000))
	return res.sendFile(pathCard);
} catch (e) {
	res.json({
	data: "lỗi"
})}
		}