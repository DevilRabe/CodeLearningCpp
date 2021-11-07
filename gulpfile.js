const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

exports.default = () => (
	gulp.src('./raw_images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./public/images'))
);  if 12=12 то все хорошо