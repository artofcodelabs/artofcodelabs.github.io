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

// BEGIN Main tasks

// Default task
gulp.task('default', ['build'], function() {
  gulp.start('watch');
});

// Production task
gulp.task('production', function(){
  gulp.run('minify-images');
});

// END Main tasks

// Build task
gulp.task('build', function() {
  gulp.start('minify-js');
  gulp.start('minify-css');
});

// Watch
gulp.task('watch', function() {
  gulp.watch(['_coffeescripts/**/*.coffee'], {cwd: '.'}, ['minify-js']);
  gulp.watch(['_sass/**/*.scss'], {cwd: '.'}, ['minify-css']);
});

// Clean
gulp.task('clean', function() {
  return del(['_javascripts/*']);
});

// Coffee
gulp.task('coffee', ['clean'], function() {
  return gulp.src('./_coffeescripts/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./_javascripts/'));
});

// Scripts
gulp.task('scripts', ['coffee'], function() {
  var manifest = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/foundation-sites/dist/plugins/foundation.core.js',
    './node_modules/foundation-sites/dist/plugins/foundation.util.mediaQuery.js',
    './node_modules/foundation-sites/dist/plugins/foundation.util.box.js',
    './node_modules/foundation-sites/dist/plugins/foundation.util.triggers.js',
    './node_modules/foundation-sites/dist/plugins/foundation.interchange.js',
    './node_modules/loco-js/dist/loco.js',
    './node_modules/baffle/dist/baffle.min.js',
    './_javascripts/initializers/**/*.js',
    './_javascripts/views/**/*.js',
    './_javascripts/controllers/**/*.js'
  ];
  return gulp.src(manifest)
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./javascripts/'));
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

gulp.task('jekyll', shell.task([
  'jekyll s'
]));