
// /Users/arashshoar/Desktop/arash/Projects/DropLabels
// ./backup-of-source-files/droplabels/sites/all/themes/drop_labels_bootstrap/css
var gulp = require('gulp');
// var webserver = require('gulp-webserver');
// var webpack = require('gulp-webpack');
var sass = require("gulp-sass");
var rename = require('gulp-rename');
const watchSass = require("gulp-watch-sass");

// gulp.task('sass', function(){
// 	return gulp.src('./style/*.scss')
// 	.pipe(sass({outputStyle: 'expanded'})).pipe(rename('style.css'))
// 	.pipe(gulp.dest('./style/'));
// });

gulp.task('sass', function(){
	return gulp.src('./sites/all/themes/drop_labels_bootstrap/css/droplabels-general-style.scss')
	.pipe(sass({outputStyle: 'expanded'})).pipe(rename('droplabels-general-style.css'))
	.pipe(gulp.dest('./sites/all/themes/drop_labels_bootstrap/css/'));
});

// gulp.task("sass:watch", () => {
//   gulp.watch([
//     './style/*.scss',
//     './style/'
//   ], ["sass"]);
// });

gulp.task("sass:watch", () => {
  gulp.watch([
    './sites/all/themes/drop_labels_bootstrap/css/droplabels-general-style.scss',
    './sites/all/themes/drop_labels_bootstrap/css/'
  ], ["sass"]);
});

// gulp.task('webpack', function() {
// 	return gulp.src('./src/js/app.js')
// 	  .pipe(webpack( require('./webpack.config.js') ))
// 	  .pipe(gulp.dest('./'));
// });

// gulp.task('webserver', function(){
// 	return gulp.src("./")
// 	.pipe(webserver({
// 		port: "4000",
// 		livereload: true,
// 		open: true
// 	}));
// });

//gulp.task('default', ['webpack', 'sass', 'sass:watch', 'webserver']);
gulp.task('default', ['sass', 'sass:watch']);
