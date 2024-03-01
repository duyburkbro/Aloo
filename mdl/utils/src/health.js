module.exports.health = async function(req, res) {
	try {
		const{
			chieucao
		} = req.query
		if (!chieucao) return res.json({"error": "Thiếu chieucao"})
		if(!chieucao.includes(".")) return res.json({"error": "Vui lòng nhập đúng định dạng VD: 1.80"})
		const args = chieucao.split(".");
		res.json({
			"Cân cân nặng lý tưởng của bạn là": (args[1] * 9 / 10),
			"Cân nặng tối đa là": args[1],
			"Cân nặng tối thiểu là": (args[1] * 8 / 10)
		})
	} catch (error) {
		res.json({"error": "Lỗi không xác định"})
	}
}