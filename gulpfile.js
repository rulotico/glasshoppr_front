var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');

gulp.task('styles', function() {
  return sass('assets/sass/main.sass', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/stylesheets'))
    // .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch('assets/sass/**/*.sass', ['styles']);
});
