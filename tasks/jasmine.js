var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('jasmine-cli', function() {
    return gulp.src('spec/**/*_spec.js')
        .pipe(plugins.jasmine({incudeStackTrace: true}));
});

gulp.task('jasmine-browser', function() {
    return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({port: 8888}));
});