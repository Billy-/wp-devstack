var fs = require('fs'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    async = require('async'),
    themes = require('../app/themes'),
    config = require('../config'),

    themeNames = Object.keys(themes);

gulp.task('sass', function (callback) {
    var tasks = [],
        i = themeNames.length;

    while (i--) {
        tasks.push(function(){
            var theme = themes[themeNames[i]];

            return function(cb){
                gulp.src(theme.config.compileSass, {cwd: config.source + '/' + theme.name})
                .pipe(sass({
                    errLogToConsole: true
                }).on('error', console.error.bind(console)))
                .pipe(gulp.dest('compiled/' + theme.name))
                .on('end', cb);
            }
        }());
    }
    async.parallel(tasks, callback);
});
