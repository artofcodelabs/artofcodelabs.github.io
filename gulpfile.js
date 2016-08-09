/*!
 * gulp
 * $ npm install gulp-coffee gulp-concat gulp-notify del gulp-jasmine-browser gulp-watch --save-dev
 */

/*
  $ gulp         - start build & watch tasks
  $ gulp watch   - watch .coffee files for changes
  $ gulp build   - build
*/

// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del'),
    coffee = require('gulp-coffee'),
    watch = require('gulp-watch');

// Default task
gulp.task('default', ['build'], function() {
  gulp.start('watch');
});

// Build task
gulp.task('build', function() {
  gulp.start('scripts');
});

// Watch
gulp.task('watch', function() {
  gulp.watch(['_coffeescripts/**/*.coffee'], {cwd: '.'}, ['scripts']);
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
    .pipe(gulp.dest('./javascripts/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});