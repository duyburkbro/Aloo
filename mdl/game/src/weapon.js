module.exports.weapon = async function(req, res) {
	try {
		res.sendFile(__dirname + "/data/weapon.json")
	} catch (error) {
		console.log(error)
	}
}