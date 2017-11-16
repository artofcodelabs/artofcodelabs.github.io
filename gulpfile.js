console.log('Node version: ' + process.version);

// Load plugins
var gulp = require('gulp'),
    del = require('del'),
    pump = require('pump'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    coffee = require('gulp-coffee'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    csslint = require('gulp-csslint'),
    shell = require('gulp-shell'),
    uglify = require('gulp-uglify');

// Production task
gulp.task('production', function(){
  gulp.run('minify-images');
});

// Build task
gulp.task('build', function() {
  gulp.start('minify-js');
  gulp.start('minify-css');
});

gulp.task('minify-js', ['scripts'], function (cb) {
  pump([
    gulp.src('./javascripts/application.js'),
    uglify(),
    rename('application.min.js'),
    gulp.dest('./javascripts/'),
    notify({message: 'JavaScript created'})
  ], cb);
});

// Task that compiles scss files down to good old css
gulp.task('pre-process', function(){
  return gulp.src('./_sass/application.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(size({gzip: false, showFiles: true, title:'without vendor prefixes'}))
    .pipe(size({gzip: true, showFiles: true, title:'without vendor prefixes'}))
    .pipe(prefix())
    .pipe(size({gzip: false, showFiles: true, title:'after vendor prefixes'}))
    .pipe(size({gzip: true, showFiles: true, title:'after vendor prefixes'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', ['pre-process'], function(){
  return gulp.src('./css/application.css')
    .pipe(minifyCSS())
    .pipe(size({gzip: false, showFiles: true, title:'minified css'}))
    .pipe(size({gzip: true, showFiles: true, title:'minified css'}))
    .pipe(rename('application.min.css'))
    .pipe(gulp.dest('./css/'))
    .pipe(notify({message: 'CSS created'}));
});

gulp.task('minify-images', function(){
  return gulp.src('./images/*')
    .pipe(size({gzip: false, showFiles: true, title:'original image size'}))
    .pipe(size({gzip: true, showFiles: true, title:'original image size'}))
    .pipe(imagemin())
    .pipe(size({gzip: false, showFiles: true, title:'minified images'}))
    .pipe(size({gzip: true, showFiles: true, title:'minified images'}))
    .pipe(gulp.dest('./images'));
});

gulp.task('csslint', function(){
  return gulp.src('./css/application.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});