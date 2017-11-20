console.log('Node version: ' + process.version);

var gulp = require('gulp'),
    size = require('gulp-size'),
    imagemin = require('gulp-imagemin');

gulp.task('production', function(){
  gulp.run('minify-images');
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