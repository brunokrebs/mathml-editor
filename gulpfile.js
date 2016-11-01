var gulp = require('gulp');
var pump = require('pump');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

gulp.task('compress', function (cb) {
	pump([
			gulp.src('src/*.js'),
			uglify(),
			rename("mathml-editor.min.js"),
			gulp.dest('dist'),
			gulp.dest('demo')
		],
		cb
	);
});

gulp.task('webserver', function() {
	gulp.src('demo')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});