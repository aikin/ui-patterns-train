'use strict';

var gulp       = require('gulp');
var livereload = require('gulp-livereload');


var paths = {
    reload: ['./ui-patterns/**/*.html', './ui-patterns/**/*.css', './ui-patterns/**/*.js']
};

gulp.task('watch:reload', function() {

    livereload.listen({basePath: 'ui-patterns'});
    return gulp.watch(paths.reload, function(event) {
        livereload.changed(event.path);
    });
});