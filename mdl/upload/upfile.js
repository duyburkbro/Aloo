const router = require("express").Router();
const multer = require('multer');
const upload = multer({ dest: __dirname + '/data' });
const cpUpload = upload.fields([{ name: 'upload', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
router.post('/file', cpUpload, function (req, res, next) {
	const
		{ upload } = req.files;
	var url = [];
	for (var i of upload) {
		const 
			{ path, mimetype, filename  } = i,
			Cname = path + '.' + mimetype.split('/')[1];
		require('fs-extra').rename(path, Cname)
		url.push('https://nodebenjs.miraiofficials123.repl.co/api/upload/get?id=' + filename + '.' + mimetype.split('/')[1])
	};
	return res.json({url})
});
router.get('/file', (req, res) => res.sendFile(__dirname + '/upfile.html'));
router.get('/get', (req, res) => {
	const { id } = req.query;
	if (!id) return res.json({
		status: 404,
		msg: 'vui lòng nhập id'
	});
	const path = __dirname + '/data/' + id;
	if (!require('fs-extra').existsSync(path)) return res.json({
		status: 404,
		msg: 'ID bạn nhập không tồn tại'
	})
	return res.sendFile(path)
})
module.exports = router