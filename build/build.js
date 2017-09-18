var through = require('through2');
var fs = require("fs");
var path = require("path");

module.exports = function (distFile, replaceWords) {
	var utilStr = "";
	var lastFile;
	return through.obj(function (file, encoding, callback) {

		//buffer对象可以操作
		if (file.isBuffer()) {
			//拿到单个文件buffer
			utilStr += '(function(vUtil){\n' + file.contents.toString(encoding) + '\n})(vUtil);\n';
			file.contents = new Buffer(utilStr, encoding);
		}

		//stream流是不能操作的,可以通过fs.readFileSync
		if (file.isStream()) {
			//同步读取
			utilStr += fs.readFileSync(file.path, encoding) + '\n';
			file.contents = new Buffer(utilStr, encoding);
		}

		lastFile = file;

		// this.push(file);

		callback();
	}, function (callback) {
		if (!lastFile) {
			callback();
			return;
		}

		var distStr = fs.readFileSync(distFile, 'utf-8')
		lastFile.path = path.join(lastFile.base, distFile);
		lastFile.contents = new Buffer(distStr.replace(replaceWords, utilStr), 'utf-8');

		this.push(lastFile);

		callback();
	});
};