var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var uglify = require('gulp-uglify');
var concat = require('./build.js');

gulp.task('build', [], function () {
	console.log(concat)
	return gulp.src('./')
		.pipe(concat())
		.pipe(gulp.dest('./'));
});