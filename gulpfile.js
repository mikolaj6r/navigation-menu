let gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename');
  
gulp.task("sass", () => gulp.src("src/sass/*.scss")
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest("static/css"))
  .pipe(rename({suffix: '.min'}))
  .pipe(cssnano())
  .pipe(gulp.dest("static/css")));

gulp.task("default", () => {
  gulp.watch("src/sass/*.scss", ["sass"]);
});