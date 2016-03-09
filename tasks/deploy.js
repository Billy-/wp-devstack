var gulp = require('gulp'),
    async = require('async'),
    themes = require('../app/themes'),
    config = require('../config'),

    themeNames = Object.keys(themes),

    deploy = function(deployWhat, deployFrom, callback){
        var tasks = [],
            i = themeNames.length;

        while (i--) {
            tasks.push(function(){
                var theme = themes[themeNames[i]];
                return function(cb){
                    gulp.src(theme.config[deployWhat], {cwd: deployFrom + '/' + theme.name})
                    .pipe(gulp.dest(theme.config.deployDest + '/' + theme.name))
                    .on('end', cb);
                }
            }());
        }
        async.parallel(tasks, callback);
    };

gulp.task('deploy', ['deploycss', 'deployjs', 'deployother']);

gulp.task('deploycss', ['sass'], function(callback){
    deploy('deployCss', 'compiled', callback);
});

gulp.task('deployjs', ['js'], function(callback){
    deploy('deployJs', 'compiled', callback);
});

gulp.task('deployother', function(callback){
    deploy('deployOther', config.source, callback);
});
