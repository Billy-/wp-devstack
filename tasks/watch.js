var gulp = require('gulp'),
    themes = require('../app/themes'),
    config = require('../config'),

    themeNames = Object.keys(themes);

gulp.task('watch', ['deploy'], function(){
    i = themeNames.length;
    while (i--) {
        var theme = themes[themeNames[i]];
        gulp.watch(theme.config.watchSass, {cwd: config.source + '/' + theme.name}, ['deploycss']);
        gulp.watch(theme.config.watchJs, {cwd: config.source + '/' + theme.name}, ['deployjs']);
        gulp.watch(theme.config.watchOther, {cwd: config.source + '/' + theme.name}, ['deployother']);
    }
});
