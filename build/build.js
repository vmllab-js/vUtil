var fs = require("fs");
var path = require("path");
var srcPath = "../src/";
var distFile = "../dist/vUtil.js";

function build() {
	var stream = through(function (file, encoding, callback) {
		var utilStr = "";
		var files = fs.readdirSync(srcPath);
		files.forEach(function (file) {
			var stat = fs.statSync(srcPath + file);
			if (!stat.isDirectory()) {
				utilStr += fs.readFileSync(srcPath + file, "utf-8") + "\n";
			}
		});

		var distStr = fs.readFileSync("vUtil.js", "utf-8");
		distStr = distStr.replace('"__vUtil__"', utilStr);
		fs.writeFileSync(distFile, distStr, "utf-8");

		callback();
	}, function (callback) {
		callback();
	});

	return stream;
}


module.exports = build;