var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var production = process.env.NODE_ENV === 'production';

// Browserify task
gulp.task('browserify', function () {
  var bundler = browserify('./server/react/App.jsx', {basedir: __dirname, debug: !production});
  bundler.transform(reactify);
  var stream = bundler.bundle();
  return stream
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./server/scripts'));
});