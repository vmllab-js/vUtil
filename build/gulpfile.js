var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('./build.js');

gulp.task('build', [], function () {
	return gulp.src('../src/*.js')
		.pipe(concat('vUtil.js', '"__vUtil__"'))
		.pipe(gulp.dest('../dist/'))
		.pipe(uglify({preserveComments: 'license'}))
		.pipe(rename('vUtil.min.js'))
		.pipe(gulp.dest('../dist/'));
});