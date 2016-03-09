var fs = require('fs'),
    gulp = require('gulp'),
    async = require('async'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    themes = require('../app/themes'),
    config = require('../config'),

    themeNames = Object.keys(themes);

gulp.task('js', function (callback) {
    var tasks = [],
        i = themeNames.length;
    while (i--) {
        tasks.push(function(){
            var theme = themes[themeNames[i]];
            return function(cb){
                browserify(config.source + '/' + theme.name + '/' + theme.config.compileJs)
                .bundle()
                .pipe(source(theme.name + '/' + theme.config.compileJs))
                .pipe(gulp.dest('compiled'))
                .on('end', cb);
            }
        }());
    }
    async.parallel(tasks, callback);
});
